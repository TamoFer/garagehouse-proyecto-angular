import { Sesion } from './../../../models/sesion';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Usuario } from 'src/app/models/usuario';
import { Store } from '@ngrx/store';
import { loadSesionSuccess } from 'src/app/core/state/sesion.actions';

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
      nameUsuario: new FormControl ('Gail57',[Validators.required]),
      contrasena: new FormControl('XZnXBRsf7FYwwMa', [Validators.required]),
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
      this.store.dispatch(loadSesionSuccess({usuarioActivo: usuario}));
    });


    this.ruta.navigate(['inicio']);
  }

  vaciarCampos(){
    this.formulario.reset({
      email:'',
      contrasena:'',
      perfil:''
    })
  }
}
