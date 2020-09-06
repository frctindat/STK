
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentesCompartidosModule } from '../Compartidos/Componentes-Compartidos.module';

@NgModule({
    declarations: [AuthComponent],
    imports: [ComponentesCompartidosModule,
              CommonModule,
              ReactiveFormsModule,
              FormsModule,
              RouterModule.forChild( [ {path: 'auth', component: AuthComponent} ] )
             ]
})
export class AuthModule {}
