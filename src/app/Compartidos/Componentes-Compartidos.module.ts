import { NgModule } from '@angular/core';
import { ActivarMenuDirective } from './Directivas/activar-menu.directive';
import { AlertaComponent } from './Alerta/alerta.component';
import { SpinnerCargaComponent } from './Spinner/spinner-carga.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ActivarMenuDirective,
    AlertaComponent,
    SpinnerCargaComponent
  ],

  imports: [CommonModule],

  exports: [
    ActivarMenuDirective,
    AlertaComponent,
    SpinnerCargaComponent,
    CommonModule
  ]
})
export class ComponentesCompartidosModule {}
