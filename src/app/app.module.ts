import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './Encabezado/encabezado/encabezado.component';
import { PartesComponent } from './Equipos/Partes/partes/partes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioComponente } from './Compartidos/ServicioComponente';
import { AppRuteoModule } from './app-ruteo.module';
import { ServicioEquipos } from './Equipos/ServicioEquipos';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './Auth/auth.component';
import { AuthInterceptorService } from './Auth/auth-interceptor-service';
import { EquipoModule } from './Equipos/equipos.module';
import { ListaPedidosModule } from './lista-pedidos/lista-pedidos.module';
import { ComponentesCompartidosModule } from './Compartidos/Componentes-Compartidos.module';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PartesComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRuteoModule,
    HttpClientModule,
    EquipoModule,
    ListaPedidosModule,
    ComponentesCompartidosModule
  ],
  providers: [ServicioComponente, ServicioEquipos, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
