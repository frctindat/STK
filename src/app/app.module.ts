import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './Encabezado/encabezado/encabezado.component';
import { PartesComponent } from './Equipos/Partes/partes/partes.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { ListaPedidosEdicionComponent } from './lista-pedidos/lista-pedidos-edicion/lista-pedidos-edicion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivarMenuDirective } from './Compartidos/Directivas/activar-menu.directive';
import { ServicioComponente } from './Compartidos/ServicioComponente';
import { AppRuteoModule } from './app-ruteo.module';
import { ServicioEquipos } from './Equipos/ServicioEquipos';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './Auth/auth.component';
import { SpinnerCargaComponent } from './Compartidos/Spinner/spinner-carga.component';
import { AuthInterceptorService } from './Auth/auth-interceptor-service';
import { AlertaComponent } from './Compartidos/Alerta/alerta.component';
import { EquipoModule } from './Equipos/equipos.module';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PartesComponent,
    ListaPedidosComponent,
    ListaPedidosEdicionComponent,
    ActivarMenuDirective,
    AuthComponent,
    SpinnerCargaComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRuteoModule,
    HttpClientModule,
    EquipoModule
  ],
  providers: [ServicioComponente, ServicioEquipos, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
