import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServicioEquipos } from '../Equipos/ServicioEquipos';
import { Equipo } from '../Equipos/equipo.model';
import { map, take, exhaustMap, tap } from 'rxjs/operators';
import { AuthService } from '../Auth/Auth.service';

@Injectable({ providedIn: 'root'})

export class ServicioHTTP {
  constructor(private Http: HttpClient, 
              private ServicioEquipos: ServicioEquipos,
              private AuthService: AuthService) {}

  GuardarEquipos() {
      const Equipos = this.ServicioEquipos.getEquipos();
      this.Http.put('https://stkangular2.firebaseio.com//Equipos.json', Equipos).subscribe(
          Respuesta => {
              console.log(Respuesta);
          }
      )
  }

  RecuperarEquipos() {
      
        return this.Http.get<Equipo[]>('https://stkangular2.firebaseio.com//Equipos.json').
        pipe(          
        map(Equipos => {                           // Este map espera el observable que traerá un array de objetos Equipo. 
            return Equipos.map(equipo => {         // Este map es una función que no tiene nada que ver con la anterior y trabaja con un array como parámetro.
              return { ...equipo, Componentes: equipo.Componentes ? equipo.Componentes : [] };
            });                                    // El map toma el array y trabaja sobre cada elemento, replicando su propiedades salvo los componentes. En este caso verifica si el elemento del array (Es decir un equipo) tiene componentes. En ese caso los replica, de lo contrario agrega un componente vacío [] para que no se rompa cuando muestre los equipos.
        }), tap(EquiposRecibidos => {              // El tap no afecta el contenido pero toma la salida del map y publica la actualización de los equipos. Tener en cuenta que el pipe se ejecuta de izquierda a derecha con lo cual al tap (Segundo término del pipe) le llega el array de equipos retocados por el map.
            this.ServicioEquipos.ActualizarEquipos(EquiposRecibidos);
            })
        );

  }
}