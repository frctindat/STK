import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, RespuestaAuth } from './Auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent implements OnInit {

    constructor(private AuthService: AuthService, private ruteo: Router) {};

    bModoLogin = true;
    bIsLoading = false;
    cError: string = null;
    FormAuth: FormGroup;

    ngOnInit() {
        let Email = '';
        let Password = '';

        this.FormAuth = new FormGroup({
                            Email: new FormControl(Email, Validators.required),
                            Password: new FormControl(Password, Validators.minLength(6))
                
        })
    }

    onSwLogin() {
        this.bModoLogin = !this.bModoLogin;
    }

    onSubmit() {
        if (!this.FormAuth.valid) {
            return;
        }

        this.bIsLoading = true;

        const email = this.FormAuth.get('Email').value;
        const password = this.FormAuth.get('Password').value;

        let ObserAuth: Observable<RespuestaAuth>;

        console.log('Formularo de autorización ',this.FormAuth.value);
        console.log('El mail es ', email);
        console.log('El pass es ', password);

        if (this.bModoLogin) {
            ObserAuth = this.AuthService.Logeo(email, password);
        } else {
            ObserAuth = this.AuthService.Registro(email, password);
        }

        ObserAuth.subscribe(
            RespPost => {
                console.log(RespPost);
                this.bIsLoading = false;
                this.cError = null;
                this.ruteo.navigate(['/equipos'])

            },
            MensajeError => {
                console.log('Mensaje procesado por el pipe: ', MensajeError);
                this.cError = MensajeError;
                this.bIsLoading = false;                                      
            }
        )

        this.FormAuth.reset();

    }

}
