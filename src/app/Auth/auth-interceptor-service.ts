import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
import { AuthService } from './Auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    
    constructor(private AuthService: AuthService){};

    intercept(entra: HttpRequest<any>, sale: HttpHandler) {
        return this.AuthService.usuario.pipe(
            take(1),                                      // El Take(1) hace que del BehaviorSubject que está en el servicio de autentificación solo se tome una vez el valor del usuario. Le dice que solo quiere tomar un valor de ese observable y luego se desuscribe. Esto significa que take me da el último valor del user y luego se desuscribe. De esto se deduce que esta no es una suscripción contínua. 
            exhaustMap( UserResp => {                     // ExahustMap permite manejar los dos observables juntos: El que espero con el usuario y el que obtengo como respuesta del get. Para ello primero espera el user y luego devuelve le get, recién cuando ya tiene el usuario que es lo que necesita para mandar el token en el get
                if (!UserResp) {                          // En el BehaviorSubject el user se inicializó en null para que acá se evalúe su valor. Si sigue null significa que el usuario no fué obtenido, es decir que no está logeado. En ese caso devuelve el request tal como llegó porque no tiene un usuario para agregar.
                  return sale.handle(entra);
                }
                const entraModificado = entra.clone({     // Lo que hace el interceptor en definitiva es clonar el request, solo si ya hay usuario definido, agregándole como parámetro el token que me devuelve el usuario.
                    params: new HttpParams().set('auth',UserResp.Token)
                });
                return sale.handle(entraModificado);
            }));        
    }
}