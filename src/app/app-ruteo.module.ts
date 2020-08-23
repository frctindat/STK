import { ListaPedidosComponent } from "./lista-pedidos/lista-pedidos.component";
import { EquiposComponent } from './Equipos/equipos/equipos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { EquiposDetalleComponent } from './Equipos/equipos-detalle/equipos-detalle.component';
import { SinEquipoComponent } from './Equipos/sin-equipo/sin-equipo.component';
import { EquipoEditComponent } from './Equipos/equipo-edit/equipo-edit.component';
import { AuthComponent } from './Auth/auth.component';

const vRutas: Routes = [
    {path: '', redirectTo: '/equipos', pathMatch: 'full'},
    {path: 'equipos', component: EquiposComponent, children: [
        {path: '', component: SinEquipoComponent},
        {path: 'nuevo', component: EquipoEditComponent},
        {path: ':id', component: EquiposDetalleComponent},
        {path: ':id/editar', component: EquipoEditComponent}
    ] },
    {path: 'pedidos', component: ListaPedidosComponent},
    {path: 'auth', component: AuthComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(vRutas)], 
    exports: [RouterModule]
})

export class AppRuteoModule {}