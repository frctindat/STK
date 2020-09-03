import { ListaPedidosComponent } from "./lista-pedidos/lista-pedidos.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from './Auth/auth.component';

const vRutas: Routes = [
    {path: '', redirectTo: '/equipos', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(vRutas)],
    exports: [RouterModule]
})

export class AppRuteoModule {}
