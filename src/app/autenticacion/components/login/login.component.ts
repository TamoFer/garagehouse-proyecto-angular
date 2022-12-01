import { sesionCargada } from './../../../core/state/sesion.actions';
import { Sesion } from './../../../models/sesion';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
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
  hide:boolean=true;

  constructor(

    private ruta: Router,
    private sesionService: SesionService,
    private storeSesion: Store<Sesion>

  ) {
    this.formulario = new FormGroup({
      nameUsuario: new FormControl ('',[Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]),
    })

  }

  ngOnInit(): void {
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

  usuarioNoAdmin(){
    this.formulario.reset()
    this.formulario.patchValue({
      nameUsuario:'Arlie68',
      contrasena:'HpYczBiILVgaKjm',
    });
  }

  usuarioAdmin(){
    this.formulario.reset()
    this.formulario.patchValue({
      nameUsuario:'Reta3',
      contrasena:'RLaRCN5gSfnPq6m',
    });
  }

}
