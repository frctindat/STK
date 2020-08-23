import { Component, OnInit, Input } from '@angular/core';
import { Equipo } from '../../equipo.model';
import { ServicioEquipos } from '../../ServicioEquipos';


@Component({
  selector: 'app-equipos-item',
  templateUrl: './equipos-item.component.html',
  styleUrls: ['./equipos-item.component.css']
})

export class EquiposItemComponent implements OnInit {

  @Input() oEquipo: Equipo;

  constructor(private ServicioEquipos: ServicioEquipos) { };

  ngOnInit(): void {
  }

  
 
}
