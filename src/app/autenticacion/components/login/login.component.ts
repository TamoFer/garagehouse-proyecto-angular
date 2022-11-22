import { sesionCargada } from './../../../core/state/sesion.actions';
import { Sesion } from './../../../models/sesion';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Usuario } from 'src/app/models/usuario';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private sesionService: SesionService,
    private ruta: Router,
    private store: Store<Sesion>
  ) {
    this.formulario = new FormGroup({
      nameUsuario: new FormControl ('Joseph.Morissette3',[Validators.required]),
      contrasena: new FormControl('UhuCG9zDvdmch26', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  login(){
    let u: Usuario = {
      id: 0,
      nameUsuario: this.formulario.value.nameUsuario,
      contrasena: this.formulario.value.contrasena,
      admin: false
    }
    this.sesionService.login(u).subscribe((usuario: Usuario) => {
      this.store.dispatch(sesionCargada({usuarioActivo: usuario}));
      this.ruta.navigate(['inicio']);
    });
  }

  vaciarCampos(){
    this.formulario.reset({
      email:'',
      contrasena:'',
      perfil:''
    })
  }
}