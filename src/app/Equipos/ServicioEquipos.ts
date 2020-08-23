import { Equipo } from './equipo.model';
import { Injectable } from '@angular/core';
import { componente } from '../Compartidos/componente.model';
import { ServicioComponente } from '../Compartidos/ServicioComponente';
import { Subject } from 'rxjs';

@Injectable()

export class ServicioEquipos {

eEquipoCambia = new Subject<Equipo[]>();

  private vServicioEquipos: Equipo[]  = [];
  // private vServicioEquipos: Equipo[]  = [
  //       new Equipo(0,
  //                  'Telequipo',
  //                  'Centrales Telefónicas',
  //                  'Central MC14',
  //                  1200.20,
  //                  'https://http2.mlstatic.com/preatendedor-universal-telequipo-at01-2-operadoras-a-la-vez-D_NQ_NP_726489-MLA41565854500_042020-O.webp',
  //                  [new componente ('BC327',3), 
  //                   new componente ('555',1)]
  //                  ),
  //       new Equipo(1,
  //                  'Telequipo',
  //                  'Centrales Telefónicas',
  //                  'Central MC28',
  //                  2300.20,
  //                  'https://cdn.shopify.com/s/files/1/1265/3425/articles/WhatsApp_Image_2017-12-19_at_09.21.50_1200x900.jpeg?v=1513709708',
  //                  [new componente ('Speaker', 1), 
  //                   new componente ('TTL744',2)]
  //                  )
  //     ];

    constructor(private SrvComponente: ServicioComponente){};

      getEquipos() {
        return this.vServicioEquipos.slice();
    }

      ActualizarEquipos(Equipos: Equipo[]) {
        this.vServicioEquipos = Equipos;
        this.eEquipoCambia.next(this.vServicioEquipos.slice());
      }

      getMaxIDEquipo() {
        let nMax = 0;
        for(let a of this.vServicioEquipos){
          if(a.Id > nMax) {
            nMax = a.Id;
          }
        }
        return(nMax);
      }
    
      getUnEquipo(pId: number) {
        const UnEquipo = this.vServicioEquipos.find(
          (e) => {
            return e.Id === pId;
          }
        );
        return UnEquipo;
    }

    AgregarComponentesAlPedido(pListaComponentes: componente[]){
        this.SrvComponente.addComponentesDeEquipo(pListaComponentes);
    }

    AgregaEquipo(oNuevoEquipo:Equipo){
      // const id = this.vServicioEquipos.length + 1;
      
      const id = this.getMaxIDEquipo() + 1;
      oNuevoEquipo.Id = id;
      this.vServicioEquipos.push(oNuevoEquipo);
      this.eEquipoCambia.next(this.vServicioEquipos.slice());
    }

    ActualizaEquipo(nIndice: number, oEquipoAActualizar: Equipo) {
      console.log('ActualizaEquipo.indice: ' + nIndice);
      console.log('oEquipoAActualizar = ');
      console.log(oEquipoAActualizar);
      this.vServicioEquipos[nIndice] = oEquipoAActualizar;
      this.eEquipoCambia.next(this.vServicioEquipos.slice());
    }

    BorrarEquipo(nIndice: number){
      this.vServicioEquipos.splice(nIndice,1);
      this.eEquipoCambia.next(this.vServicioEquipos.slice());
    }
    
}