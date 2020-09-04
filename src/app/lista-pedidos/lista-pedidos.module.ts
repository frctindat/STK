import { NgModule } from '@angular/core';
import { ListaPedidosComponent } from './lista-pedidos.component';
import { ListaPedidosEdicionComponent } from './lista-pedidos-edicion/lista-pedidos-edicion.component';
import { FormsModule } from '@angular/forms';
import { ListaPedidosRuteoModule } from './lista-pedidos-ruteo.module';
import { ComponentesCompartidosModule } from '../Compartidos/Componentes-Compartidos.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ ListaPedidosComponent, ListaPedidosEdicionComponent ],
  imports: [ ComponentesCompartidosModule,
             FormsModule,
             ListaPedidosRuteoModule
           ],
})

export class ListaPedidosModule {}
