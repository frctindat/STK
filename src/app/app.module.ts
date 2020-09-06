import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './Encabezado/encabezado/encabezado.component';
import { PartesComponent } from './Equipos/Partes/partes/partes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRuteoModule } from './app-ruteo.module';
import { AuthComponent } from './Auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { EquipoModule } from './Equipos/equipos.module';
import { ListaPedidosModule } from './lista-pedidos/lista-pedidos.module';
import { ComponentesCompartidosModule } from './Compartidos/Componentes-Compartidos.module';
import { CentralModule } from './central.module';

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
    ComponentesCompartidosModule,
    CentralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
