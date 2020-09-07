import { ListaPedidosComponent } from "./lista-pedidos/lista-pedidos.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const vRutas: Routes = [ {path: '', redirectTo: '/equipos', pathMatch: 'full'},
                         {path: 'equipos', loadChildren: () => import('./Equipos/equipos.module').then(m => m.EquipoModule)} ]
// Esto es así para permitir el lazylanding que hace que el módulo de equipos solo se cargue si se usa acelerando la carga inicial.
// Equipos es el único componente que cargo con Lazy Landing en este proyecto.

@NgModule({
    imports: [RouterModule.forRoot(vRutas, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRuteoModule {}
