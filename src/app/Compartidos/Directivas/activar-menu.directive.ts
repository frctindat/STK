import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appActivarMenu]'
})
export class ActivarMenuDirective {
  @HostBinding('class.open') bMenuAbierto = false;

  @HostListener('click') CambioMenu() {
    this.bMenuAbierto = !this.bMenuAbierto
  }

  constructor() { }

}
