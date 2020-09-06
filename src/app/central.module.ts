import { NgModule } from '@angular/core';
import { ServicioComponente } from './Compartidos/ServicioComponente';
import { ServicioEquipos } from './Equipos/ServicioEquipos';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './Auth/auth-interceptor-service';

@NgModule({
  providers:
    [ServicioComponente,
     ServicioEquipos,
       {provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true}]
})

export class CentralModule {}
