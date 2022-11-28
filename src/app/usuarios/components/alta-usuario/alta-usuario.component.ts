import { agregarUsuario} from './../../state/usuarios.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import { Alumnos } from 'src/app/models/alumnos';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {

  formulario!: FormGroup;
  id!:number;

  constructor(
    private dialogRef: MatDialogRef<AltaUsuarioComponent>,
    private storeUsuarios: Store<Usuario>,
    private storeAlumnos: Store<Alumnos>


  ) {

    this.formulario= new FormGroup({
      nameUsuario: new FormControl(''),
      contrasena: new FormControl(''),
      correo: new FormControl(''),
      admin: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl('')
    })

  }

  ngOnInit(): void {
  }


  agregarUsuario(){

    const u:Usuario ={
      nameUsuario:this.formulario.value.nameUsuario,
      contrasena: this.formulario.value.contrasena,
      admin:this.formulario.value.admin,
      id: this.id,
      correo: this.formulario.value.email,
      direccion: this.formulario.value.direccion,
      telefono: this.formulario.value.telefono
    };

    this.storeUsuarios.dispatch(agregarUsuario({usuario:u}))
    this.dialogRef.close();

  }

  retroceder(){
    this.dialogRef.close();
  }

}
