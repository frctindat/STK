import { ListaPedidosComponent } from "./lista-pedidos/lista-pedidos.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const vRutas: Routes = [
    {path: '', redirectTo: '/equipos', pathMatch: 'full'},
    ]

@NgModule({
    imports: [RouterModule.forRoot(vRutas)],
    exports: [RouterModule]
})

export class AppRuteoModule {}
