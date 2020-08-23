import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Equipo } from '../equipo.model'
import { ServicioEquipos } from '../ServicioEquipos';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-equipos-lista',
  templateUrl: './equipos-lista.component.html',
  styleUrls: ['./equipos-lista.component.css']
})
export class EquiposListaComponent implements OnInit, OnDestroy {

  vEquipos: Equipo[] = [];
  sSuscripcion: Subscription;

  @Output() eEquipoSeleccionado = new EventEmitter<Equipo>();
  
  constructor(private ServicioEquipos: ServicioEquipos, 
              private RutaDestino: Router,
              private RutaActiva: ActivatedRoute) {}

  ngOnInit() {
     this.sSuscripcion =  this.ServicioEquipos.eEquipoCambia.subscribe(
       (oEquipos: Equipo[]) => {
         this.vEquipos = oEquipos;
       }
     )
     this.vEquipos = this.ServicioEquipos.getEquipos();
  }

  onNuevoEquipo() {
     this.RutaDestino.navigate(['nuevo'], {relativeTo: this.RutaActiva});
  }

  ngOnDestroy(){
    this.sSuscripcion.unsubscribe();
  }

}
