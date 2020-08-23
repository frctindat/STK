import { Component, OnInit, OnDestroy } from '@angular/core';
import { componente } from '../Compartidos/componente.model';
import { ServicioComponente } from '../Compartidos/ServicioComponente';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit, OnDestroy {
  componentes: componente[] ;
  Suscripcion: Subscription;

  constructor(private servicioComponente: ServicioComponente) { }

  ngOnInit(): void {
    this.componentes = this.servicioComponente.getComponente();
    this.Suscripcion = this.servicioComponente.eComponenteCambia.subscribe(
         (Compos: componente[]) => {this.componentes = Compos});

  }

  onEditarComponente(indice: number) {
    this.servicioComponente.eComponenteEdita.next(indice);
  }

  ngOnDestroy(): void {
    this.Suscripcion.unsubscribe();
  }

}
