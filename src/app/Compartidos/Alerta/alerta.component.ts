import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent {
  @Input() Mensaje: string;
  @Output() cierra = new EventEmitter<void>();

  onClose() {
    this.cierra.emit();
  }
}
