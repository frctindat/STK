import { Component, OnInit, Input } from '@angular/core';
import { Equipo } from '../equipo.model';
import { componente } from 'src/app/Compartidos/componente.model';
import { ServicioComponente } from 'src/app/Compartidos/ServicioComponente';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServicioEquipos } from '../ServicioEquipos';

@Component({
  selector: 'app-equipos-detalle',
  templateUrl: './equipos-detalle.component.html',
  styleUrls: ['./equipos-detalle.component.css']
})
export class EquiposDetalleComponent implements OnInit {

  id: number;
  oEquipoDetalle: Equipo;
  
  constructor(private SrvComponente: ServicioComponente,
              private SrvEquipo: ServicioEquipos, 
              private RutaActiva: ActivatedRoute,
              private RutaDestino: Router) { };

  ngOnInit() {
    this.RutaActiva.params.subscribe(
      (parametro:  Params) => {
        this.oEquipoDetalle = this.SrvEquipo.getUnEquipo(+parametro['id']);
      }
    )
  }

  onAgregarComponentesALista(){
    this.SrvComponente.addComponentesDeEquipo(this.oEquipoDetalle.Componentes);    
  }

  onEditar() { 
    this.RutaDestino.navigate(['editar'], {relativeTo: this.RutaActiva});
  }

  onBorrarEquipo() {
    this.SrvEquipo.BorrarEquipo(this.id);
  }

}

  
