import { agregarUsuario} from './../../state/usuarios.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { Alumnos } from 'src/app/models/alumnos';
import { agregarAlumno } from 'src/app/alumnos/state/alumnos.actions';

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
      admin: new FormControl(false),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      correo: new FormControl('')
    })

  }

  ngOnInit(): void {
  }


  agregarUsuario(){
    const a:Alumnos= {
      idAlumno:this.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      correo: this.formulario.value.correo
    };

    const u:Usuario = {
      id: this.id,
      nameUsuario: this.formulario.value.nameUsuario,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin
    }
    this.storeAlumnos.dispatch(agregarAlumno({alumno:a}));
    this.storeUsuarios.dispatch(agregarUsuario({usuario:u}))
    this.dialogRef.close();

  }

  retroceder(){
    this.dialogRef.close();
  }

}
