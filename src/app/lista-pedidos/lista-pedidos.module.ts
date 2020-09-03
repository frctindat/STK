import { NgModule } from '@angular/core';
import { ListaPedidosComponent } from './lista-pedidos.component';
import { ListaPedidosEdicionComponent } from './lista-pedidos-edicion/lista-pedidos-edicion.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaPedidosRuteoModule } from './lista-pedidos-ruteo.module';

@NgModule({
  declarations: [ ListaPedidosComponent, ListaPedidosEdicionComponent ],
  imports: [ CommonModule, FormsModule, ListaPedidosRuteoModule ],
})

export class ListaPedidosModule {}
