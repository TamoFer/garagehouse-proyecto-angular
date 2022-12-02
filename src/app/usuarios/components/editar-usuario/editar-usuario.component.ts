import { Usuario } from 'src/app/models/usuario';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { editarUsuario } from '../../state/usuarios.actions';
import { Subscription } from 'rxjs';
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
      nameUsuario: new FormControl(this.usuario.nameUsuario,[Validators.required]),
      contrasena: new FormControl(this.usuario.contrasena,[Validators.required]),
      admin: new FormControl(this.usuario.admin,[Validators.required]),
      correo: new FormControl(this.usuario.correo,[Validators.required]),
      direccion: new FormControl(this.usuario.direccion,[Validators.required]),
      telefono: new FormControl(this.usuario.telefono,[Validators.required])
    })
  } //agregar validators desde alta-usuario

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
