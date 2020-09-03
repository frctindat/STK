import { NgModule } from '@angular/core';
import { EquiposComponent } from './equipos/equipos.component';
import { EquiposDetalleComponent } from './equipos-detalle/equipos-detalle.component';
import { EquiposListaComponent } from './equipos-lista/equipos-lista.component';
import { SinEquipoComponent } from './sin-equipo/sin-equipo.component';
import { EquipoEditComponent } from './equipo-edit/equipo-edit.component';
import { EquiposItemComponent } from './equipos-lista/equipos-item/equipos-item.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EquiposRuteoModule } from './equipos-ruteo.module';

@NgModule({
  declarations: [
    EquiposComponent,
    EquiposDetalleComponent,
    EquiposListaComponent,
    SinEquipoComponent,
    EquipoEditComponent,
    EquiposItemComponent,
  ],
  imports: [RouterModule, CommonModule, ReactiveFormsModule, EquiposRuteoModule],

  // exports: [                 No me hace falta exportar los componentes porque ya los uso desde EquiposRuteoModule
  //   EquiposComponent,
  //   EquiposDetalleComponent,
  //   EquiposListaComponent,
  //   SinEquipoComponent,
  //   EquipoEditComponent,
  //   EquiposItemComponent,
  // ]
})
export class EquipoModule {}
