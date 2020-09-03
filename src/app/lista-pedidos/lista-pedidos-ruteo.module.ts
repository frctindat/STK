import { Routes, RouterModule } from '@angular/router';
import { ListaPedidosComponent } from './lista-pedidos.component';
import { NgModule } from '@angular/core';

const vRutasPedidos: Routes = [
  {path: 'pedidos', component: ListaPedidosComponent},
]

@NgModule({
  imports: [RouterModule.forChild(vRutasPedidos)],
  exports: [RouterModule]
})

export class ListaPedidosRuteoModule {}
