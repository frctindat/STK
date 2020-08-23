import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

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

    constructor(private http: HttpClient){};

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

    private AuthHandler(idtoken: string, email: string, expiresIn: number, localId: string ) {
        const FechaExpira = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(idtoken, email, FechaExpira, localId);
        this.usuario.next(user);
    }

}