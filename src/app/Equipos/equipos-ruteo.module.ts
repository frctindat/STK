import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquiposComponent } from './equipos/equipos.component';
import { SinEquipoComponent } from './sin-equipo/sin-equipo.component';
import { EquipoEditComponent } from './equipo-edit/equipo-edit.component';
import { EquiposDetalleComponent } from './equipos-detalle/equipos-detalle.component';

const vRutasEquipos: Routes = [
  {path: 'equipos', component: EquiposComponent, children: [
    {path: '', component: SinEquipoComponent},
    {path: 'nuevo', component: EquipoEditComponent},
    {path: ':id', component: EquiposDetalleComponent},
    {path: ':id/editar', component: EquipoEditComponent}
] } ]

@NgModule({
  imports: [RouterModule.forChild(vRutasEquipos)],
  exports: [RouterModule]
})

export class EquiposRuteoModule {}
