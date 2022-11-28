import { cargarUsuarios } from './../../../usuarios/state/usuarios.actions';
import { Router } from '@angular/router';
import { Alumnos } from 'src/app/models/alumnos';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Store } from '@ngrx/store';
import { agregarUsuario} from 'src/app/usuarios/state/usuarios.actions';
import { Sesion } from 'src/app/models/sesion';
import { sesionCargada } from 'src/app/core/state/sesion.actions';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent implements OnInit {

  formulario!:FormGroup;
  hide:boolean = true;
  id:number=0;

  constructor(
    private storeUsuarios: Store<Usuario>,
    private ruta: Router,
    private sesionService: SesionService,
    private storeSesion: Store<Sesion>,
    ) {
    }

  ngOnInit(): void {
    this.formulario= new FormGroup({
      nameUsuario: new FormControl(''),
      contrasena: new FormControl(''),
      correo: new FormControl(''),
      admin: new FormControl(false),
      direccion: new FormControl(''),
      telefono: new FormControl('')
    })
  }


  crearUsuario(){

    const u:Usuario ={
      nameUsuario:this.formulario.value.nameUsuario,
      contrasena: this.formulario.value.contrasena,
      admin:this.formulario.value.admin,
      id: this.id,
      correo: this.formulario.value.correo,
      direccion: this.formulario.value.direccion,
      telefono: this.formulario.value.telefono
    };

    this.storeUsuarios.dispatch(agregarUsuario({usuario:u}));
    this.storeUsuarios.dispatch(cargarUsuarios())
    this.sesionService.login(u).subscribe((usuario: Usuario) => {
      this.storeSesion.dispatch(sesionCargada({usuarioActivo: usuario}));
      this.ruta.navigate(['inicio']);
    });

  }

  retroceder(){
    this.ruta.navigate(['autenticacion/login']);
  }
}
