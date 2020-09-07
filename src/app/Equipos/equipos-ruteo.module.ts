import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinEquipoComponent } from './sin-equipo/sin-equipo.component';
import { EquipoEditComponent } from './equipo-edit/equipo-edit.component';
import { EquiposDetalleComponent } from './equipos-detalle/equipos-detalle.component';

  const vRutasEquipos: Routes = [
    {path: '', component: SinEquipoComponent}, // En este caso el path fué cambiado de 'equipos' a '' porque todo el módulo de equipo se manejará desde el app-ruteo.module con lazy landing.{path: '', component: EquiposComponent, children: [
    {path: 'nuevo', component: EquipoEditComponent},
    {path: ':id', component: EquiposDetalleComponent},
    {path: ':id/editar', component: EquipoEditComponent}
]

@NgModule({
  imports: [RouterModule.forChild(vRutasEquipos)],
  exports: [RouterModule]
})

export class EquiposRuteoModule {}
