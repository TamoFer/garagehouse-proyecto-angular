import { sesionCargada } from './../../../core/state/sesion.actions';
import { Sesion } from './../../../models/sesion';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Usuario } from 'src/app/models/usuario';
import { Store } from '@ngrx/store';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private ruta: Router,
    private sesionService: SesionService,
    private storeSesion: Store<Sesion>,
  ) {
    this.formulario = new FormGroup({
      nameUsuario: new FormControl ('Solon10',[Validators.required]),
      contrasena: new FormControl('5TuX1ZNMnslOtuP', [Validators.required]),
    })

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }


  login(){
    let u: Usuario = {
      id: 0,
      nameUsuario: this.formulario.value.nameUsuario,
      contrasena: this.formulario.value.contrasena,
      admin: false,
      correo:'',
      direccion:'',
      telefono:0
    }
    this.sesionService.login(u).subscribe((usuario: Usuario) => {
      this.storeSesion.dispatch(sesionCargada({usuarioActivo: usuario}));
      this.ruta.navigate(['inicio']);
    });
  }

  vaciarCampos(){
    this.formulario.reset()
  }

  nuevoUsuario(){
    this.ruta.navigate(['autenticacion/nuevo-usuario']);
  }
}
