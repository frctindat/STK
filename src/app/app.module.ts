import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './Encabezado/encabezado/encabezado.component';
import { EquiposComponent } from './Equipos/equipos/equipos.component';
import { PartesComponent } from './Equipos/Partes/partes/partes.component';
import { EquiposDetalleComponent } from './Equipos/equipos-detalle/equipos-detalle.component';
import { EquiposListaComponent } from './Equipos/equipos-lista/equipos-lista.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { ListaPedidosEdicionComponent } from './lista-pedidos/lista-pedidos-edicion/lista-pedidos-edicion.component';
import { EquiposItemComponent } from './Equipos/equipos-lista/equipos-item/equipos-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivarMenuDirective } from './Compartidos/Directivas/activar-menu.directive';
import { ServicioComponente } from './Compartidos/ServicioComponente';
import { AppRuteoModule } from './app-ruteo.module';
import { SinEquipoComponent } from './Equipos/sin-equipo/sin-equipo.component';
import { EquipoEditComponent } from './Equipos/equipo-edit/equipo-edit.component';
import { ServicioEquipos } from './Equipos/ServicioEquipos';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './Auth/auth.component';
import { SpinnerCargaComponent } from './Compartidos/Spinner/spinner-carga.component';
import { AuthInterceptorService } from './Auth/auth-interceptor-service';
 
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    EquiposComponent,
    PartesComponent,
    EquiposDetalleComponent,
    EquiposListaComponent,
    ListaPedidosComponent,
    ListaPedidosEdicionComponent,
    EquiposItemComponent,
    ActivarMenuDirective,
    SinEquipoComponent,
    EquipoEditComponent,
    AuthComponent, 
    SpinnerCargaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRuteoModule,
    HttpClientModule
  ],
  providers: [ServicioComponente, ServicioEquipos, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
