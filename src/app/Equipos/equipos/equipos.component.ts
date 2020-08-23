import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo.model';
import { ServicioEquipos } from '../ServicioEquipos';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
  
})
export class EquiposComponent implements OnInit {

  constructor(private ServicioEquipos: ServicioEquipos) { }

  ngOnInit() {}

}
