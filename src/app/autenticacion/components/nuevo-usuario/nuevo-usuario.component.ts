import { agregarAlumno } from './../../../alumnos/state/alumnos.actions';
import { Router } from '@angular/router';
import { Alumnos } from 'src/app/models/alumnos';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Store } from '@ngrx/store';
import { agregarUsuario, cargarUsuarios} from 'src/app/usuarios/state/usuarios.actions';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent implements OnInit {

  formulario!:FormGroup;
  hide:boolean = true;
  id!:number;

  constructor(
    private storeUsuarios: Store<Usuario>,
    private storeAlumnos: Store<Alumnos>,
    private ruta: Router
    ) {
    }

  ngOnInit(): void {
    this.formulario= new FormGroup({
      nameUsuario: new FormControl(''),
      contrasena: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      correo: new FormControl(''),
      admin: new FormControl(false),

    })
  }


  crearUsuario(){

    const a:Alumnos= {
      idAlumno:this.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      correo: this.formulario.value.correo
    };

    const u:Usuario ={
      nameUsuario:this.formulario.value.nameUsuario,
      contrasena: this.formulario.value.contrasena,
      estudiante:a,
      admin:this.formulario.value.admin,
      id: this.id
    };

    this.storeAlumnos.dispatch(agregarAlumno({alumno:a}));
    this.storeUsuarios.dispatch(agregarUsuario({usuario:u}));
    this.ruta.navigate(['autenticacion/login']);
  }

  retroceder(){
    this.ruta.navigate(['autenticacion/login']);
  }
}
