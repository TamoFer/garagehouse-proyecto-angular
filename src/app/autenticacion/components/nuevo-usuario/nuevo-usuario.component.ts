import { cargarUsuarios } from './../../../usuarios/state/usuarios.actions';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Store } from '@ngrx/store';
import { agregarUsuario} from 'src/app/usuarios/state/usuarios.actions';
import { Sesion } from 'src/app/models/sesion';
import { sesionCargada } from 'src/app/core/state/sesion.actions';
import { SesionService } from 'src/app/core/services/sesion.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent implements OnInit {

  formulario!:FormGroup;
  id:number=0;

  constructor(
    private storeUsuarios: Store<Usuario>,
    private ruta: Router,
    private sesionService: SesionService,
    private storeSesion: Store<Sesion>,
    private snackBar: MatSnackBar
    ) {
    }

  ngOnInit(): void {
    this.formulario= new FormGroup({
      nameUsuario: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      contrasena: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      correo: new FormControl('',[Validators.required,Validators.email]),
      admin: new FormControl(false),
      direccion: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      telefono: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)])
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
    this.storeUsuarios.dispatch(cargarUsuarios());
    this.snackBar.open(`Usuario ${u.nameUsuario} creado`, '', {
      duration: 1500,
      panelClass: ['mat-toolbar', 'mat-accent'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.sesionService.login(u).subscribe((usuario: Usuario) => {
      this.storeSesion.dispatch(sesionCargada({usuarioActivo: usuario}));
      this.ruta.navigate(['inicio']);
    });

  }

  retroceder(){
    this.ruta.navigate(['autenticacion/login']);
  }
}
