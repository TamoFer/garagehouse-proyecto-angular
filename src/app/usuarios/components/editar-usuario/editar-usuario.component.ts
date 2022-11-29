import { editarAlumno } from './../../../alumnos/state/alumnos.actions';
import { Usuario } from 'src/app/models/usuario';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { editarUsuario } from '../../state/usuarios.actions';
import { Observable, Subscription } from 'rxjs';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { Curso } from 'src/app/models/curso';
import { cursosCargados } from 'src/app/cursos/state/cursos.actions';
import { selectCursos } from 'src/app/cursos/state/cursos.selectors';
import { ListaAlumnosService } from 'src/app/alumnos/services/lista-alumnos.service';
import { Alumnos } from 'src/app/models/alumnos';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  formulario!: FormGroup;
  hide=true;
  suscripcionCursos!: Subscription;


  constructor(
    private dialogRef: MatDialogRef<EditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public usuario:Usuario,
    private storeUsuario: Store<Usuario>,
    private snackBar: MatSnackBar

  ) {
    this.formulario= new FormGroup({
      nameUsuario: new FormControl(this.usuario.nameUsuario),
      contrasena: new FormControl(this.usuario.contrasena),
      admin: new FormControl(this.usuario.admin),
      correo: new FormControl(this.usuario.correo),
      direccion: new FormControl(this.usuario.direccion),
      telefono: new FormControl(this.usuario.telefono)
    })
  }

  ngOnInit(): void {
  }

  editarUsuario(){
    const u:Usuario = {
      id: this.usuario.id,
      nameUsuario: this.formulario.value.nameUsuario,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin,
      direccion: this.formulario.value.direccion,
      telefono: this.formulario.value.telefono,
      correo: this.formulario.value.correo,
    }

    this.storeUsuario.dispatch(editarUsuario({usuario:u}));
    this.snackBar.open( `Usuario editado exitosamente `,'' , {
      duration: 1500,
      panelClass: ['mat-toolbar', 'mat-accent'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.dialogRef.close();
  }


  retroceder(){
    this.dialogRef.close();
  }
}
