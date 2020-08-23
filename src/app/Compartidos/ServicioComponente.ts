import { componente } from './componente.model'; // cambbiiiaaa
import { Subject } from 'rxjs';


export class ServicioComponente {
    private componentes: componente[] = [
        new componente('Transistor BC-548',2),
        new componente('Speaker',1),
       ];

eComponenteCambia = new Subject<componente[]>();
eComponenteEdita = new Subject<number>();

getComponente() {
  return this.componentes.slice();
}

getElComponente(indice: number){
  return this.componentes[indice];
}

addComponente(pComponente: componente) {
    this.componentes.push(pComponente);
    this.eComponenteCambia.next(this.componentes.slice());
    }

addComponentesDeEquipo(pComponentes:componente[]){
    this.componentes.push(...pComponentes);
    this.eComponenteCambia.next(this.componentes.slice());
}

updateComponenteDeEquipo(pIndice: number, poComponenteModificado: componente){
  this.componentes[pIndice] = poComponenteModificado;
  this.eComponenteCambia.next(this.componentes.slice());
}

bajaComponenteDeEquipo(pIndice: number) {
  this.componentes.splice(pIndice,1);
  this.eComponenteCambia.next(this.componentes.slice());
}

}
