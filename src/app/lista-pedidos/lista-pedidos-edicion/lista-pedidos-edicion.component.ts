
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { componente } from 'src/app/Compartidos/componente.model';
import { ServicioComponente } from 'src/app/Compartidos/ServicioComponente';

@Component({
  selector: 'app-lista-pedidos-edicion',
  templateUrl: './lista-pedidos-edicion.component.html',
  styleUrls: ['./lista-pedidos-edicion.component.css']
})
export class ListaPedidosEdicionComponent implements OnInit, OnDestroy {

  constructor(private servicioComponente: ServicioComponente) { }
  
  @ViewChild('fForm', { static: false }) ElForm: NgForm;

  SuscripComponenteEdita: Subscription;
  ComponenteAEditar: number;
  bEditandoComponente: boolean;
  oComponente: componente;

  ngOnInit(): void {
    this.SuscripComponenteEdita = this.servicioComponente.eComponenteEdita.subscribe(
      (indice: number) => {
        this.ComponenteAEditar = indice;
        this.bEditandoComponente = true;
        this.oComponente = this.servicioComponente.getElComponente(indice);
        this.ElForm.setValue({
          iComponente: this.oComponente.detalle,
          iCantidad: this.oComponente.cantidad
        })
      }
    )
  }

  onAltaComponente(pfForm: NgForm) {

    const oNuevoComponente = new componente(pfForm.value.iComponente, pfForm.value.iCantidad);

    if (this.bEditandoComponente) {
      this.servicioComponente.updateComponenteDeEquipo(this.ComponenteAEditar, oNuevoComponente);
      this.bEditandoComponente = false;
    } else {
      this.servicioComponente.addComponente(oNuevoComponente);  
    }

    this.ElForm.setValue({
      iComponente: '',
      iCantidad: 0
    })

  }

  onLimpiarForm() {
    this.ElForm.reset();
    this.bEditandoComponente = false;
  }

  onBajaComponente() {
    this.servicioComponente.bajaComponenteDeEquipo(this.ComponenteAEditar);
    this.onLimpiarForm();
  }
  
  ngOnDestroy(): void {
    this.SuscripComponenteEdita.unsubscribe();
  }

}
