import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ServicioHTTP } from 'src/app/Compartidos/ServicioHTTP';
import { AuthService } from 'src/app/Auth/Auth.service';
import { Subscribable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit, OnDestroy { 

  isLogeado: boolean = false;

  constructor(private ServicioHttp: ServicioHTTP, private authService: AuthService) {}
  
  private subUsuario: Subscription;
  
  ngOnInit() {
    this.subUsuario = this.authService.usuario.subscribe(llegaUser => {
      this.isLogeado = !!llegaUser;
    })
  }
;

  onGuardarEquipo() {
    this.ServicioHttp.GuardarEquipos(); 
  }

  onRecuperarEquipos() {
    this.ServicioHttp.RecuperarEquipos().subscribe();
  }

  ngOnDestroy() {
    this.subUsuario.unsubscribe();
  }
 };

