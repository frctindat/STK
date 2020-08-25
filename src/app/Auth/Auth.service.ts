import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface RespuestaAuth {
       idToken: string;
       email: string;
       refreshToken: string;
       expiresIn: string;
       localId: string;
       registered?: boolean;
}

@Injectable({ providedIn: 'root' })

export class AuthService {

    /*Genera un subject igual que el común pero a diferencia de éste permite suscribirse obteniendo
      los valores padados. Esto es importante con el usuario porque si fuese un subject solo emite valor
      cuando se produce el login. Si luego necesito usar el token en un momento posterior, por ejemplo
      para buscar los equipos ya para ese entonces no tendría el usuario porque en ese momento no estaba
      suscrito. En cambio con BehaviorSubject puedo rescatar el valor que tenía el usuario al momento de ser
      obtenido*/
    usuario = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient, private router: Router){};
    private handlerTimerToken: any;

    Registro(email: string, password: string) {
        return this.http.post<RespuestaAuth>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBEdBErM5Za_qurCfPnKLF36Mng8w-Ty-U',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.HandlerError), tap(RespHttp => {
            this.AuthHandler(RespHttp.idToken, RespHttp.email, +RespHttp.expiresIn, RespHttp.localId)
        }));
    }

    Logeo(email: string, password: string) {
        return this.http.post<RespuestaAuth>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEdBErM5Za_qurCfPnKLF36Mng8w-Ty-U',
            {
            email: email,
            password: password,
            returnSecureToken: true
            }
        ).pipe(catchError(this.HandlerError), tap(RespHttp => {
            this.AuthHandler(RespHttp.idToken, RespHttp.email, +RespHttp.expiresIn, RespHttp.localId)
        }));
    }

    private HandlerError (RespuestaError: HttpErrorResponse) {
        let MensajeError = 'Error desconocido';

        if (!RespuestaError.error || !RespuestaError.error.error) { // Acá entra si el error no tiene el formato conocido
            return throwError(MensajeError);
        }
        switch(RespuestaError.error.error.message) {
            case 'EMAIL_EXISTS':
                MensajeError = 'El email ya existe';
                break;

            case 'EMAIL_NOT_FOUND':
                MensajeError = 'La cuenta no está registrada';
                break;

                case 'INVALID_PASSWORD':
                MensajeError = 'La contraseña no es correcta';
                break;
        }

        return throwError(MensajeError); // throwError crea un observable con el mensaje de error que luego consumirá el auth component

    }

    Salir() {
      this.usuario.next(null);
      this.router.navigate(['/auth'])
      localStorage.removeItem('userData');

      if (this.handlerTimerToken) {
        clearTimeout(this.handlerTimerToken);
      }

      this.handlerTimerToken = null;
    }


    AutoSalir(LeQuedaAlToken: number ) {
      console.log('Le queda al token en milisegundos: ', LeQuedaAlToken );
      this.handlerTimerToken = setTimeout(() => {this.Salir()}, LeQuedaAlToken);
    }

    private AuthHandler(idtoken: string, email: string, expiresIn: number, localId: string ) {
        const FechaExpira = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(idtoken, email, FechaExpira, localId);
        this.usuario.next(user);
        this.AutoSalir(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user)); // Guardo en disco el objeto con todos los datos del usuario convertido en un JSON, es decir una cadena de texto.
    }

    AutoLogeo() {
      const UsuarioRecuperado: { // Creo objeto constante con mismas propiedades que el objeto del usuario y le agrego los datos obtenidos del guardado local del usuario.
        _token: string,
        email: string,
        _ExpirationDate: string,
        localId: string
      } = JSON.parse(localStorage.getItem('userData'));

      if (!UsuarioRecuperado) {
        return;
      }

      const usuarioRearmado = new User(UsuarioRecuperado._token, // Instancio un objeto usuario y le pego las propiedades obtenidas del guardado local.
                                       UsuarioRecuperado.email,
                                       new Date(UsuarioRecuperado._ExpirationDate),
                                       UsuarioRecuperado.localId)
      if (usuarioRearmado.Token) // Verifico con el getter que está en el modelo del objeto user si todavía el token es válido.
        this.usuario.next(usuarioRearmado); // Publico el usuario obtenido.

        this.AutoSalir(new Date(UsuarioRecuperado._ExpirationDate).getTime() -
                       new Date().getTime());

    }

}
