import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ServicioEquipos } from '../ServicioEquipos';

@Component({
  selector: 'app-equipo-edit',
  templateUrl: './equipo-edit.component.html',
  styleUrls: ['./equipo-edit.component.css']
})
export class EquipoEditComponent implements OnInit {

  id: number;
  bEdita = true;
  FormEquipo: FormGroup;

  constructor(private RutaActiva: ActivatedRoute, 
              private ServicioEquipos: ServicioEquipos,
              private Ruteo: Router) { }

  get controls() { // a getter!
    return (<FormArray>this.FormEquipo.get('Componentes')).controls;
  }
  
  ngOnInit(): void {
    this.RutaActiva.params.subscribe(
      (parametro: Params) => {
        this.id = +parametro['id'];
        this.bEdita = parametro['id'] != null;
        this.InitForm();
      }
    )
  }
   
  InitForm() {
    let Id = 0;
    let Provee = '';
    let Categ = '';
    let Descripcion = '';
    let PVenta = 0;
    let Foto = '';
    let ComponentesDelEquipo = new FormArray([]);

    if (this.bEdita) {
      const oEquipo = this.ServicioEquipos.getUnEquipo(this.id);
      Id = oEquipo.Id;
      Provee = oEquipo.Proveedor;
      Categ = oEquipo.Categ;
      Descripcion = oEquipo.Descripcion;
      PVenta = oEquipo.PVenta;
      Foto = oEquipo.Foto;
      console.log(oEquipo);

      if(oEquipo['Componentes']){
        for(let componente of oEquipo.Componentes){
          ComponentesDelEquipo.push(
            new FormGroup({
              'detalle': new FormControl(componente.detalle, Validators.required),
              'cantidad': new FormControl(componente.cantidad, [Validators.required,])
            })
          )
        }
      }

    }

    this.FormEquipo = new FormGroup({
      Id: new FormControl(Id),
      Proveedor: new FormControl(Provee, Validators.required),
      Categ: new FormControl(Categ, Validators.required),
      Descripcion: new FormControl(Descripcion, Validators.required),
      PVenta: new FormControl(PVenta),
      Foto: new FormControl(Foto, Validators.required),
      Componentes: ComponentesDelEquipo
    })

    console.log(this.FormEquipo.value);
  }

  
  onSubmit() {
    console.log('onsumite');
    if(this.bEdita){
      this.ServicioEquipos.ActualizaEquipo(this.id, this.FormEquipo.value);
    } else {
      this.ServicioEquipos.AgregaEquipo(this.FormEquipo.value);
    }
    this.Ruteo.navigate(['/equipos']);
  }

  onAgregarComponente(){
    console.log('llega');
    (<FormArray>this.FormEquipo.get('Componentes')).push(
      new FormGroup({
        'detalle': new FormControl(null, Validators.required),
        'cantidad': new FormControl(null , [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onCancelarEdicion() {
    this.Ruteo.navigate(['/equipos']);
  }

  onBorrarComponenteDelEquipo(nIndice) {
    (<FormArray>this.FormEquipo.get('Componentes')).removeAt(nIndice);
  }

}
