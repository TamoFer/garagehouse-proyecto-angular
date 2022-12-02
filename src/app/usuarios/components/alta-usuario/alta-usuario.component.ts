import { agregarUsuario} from './../../state/usuarios.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {

  formulario!: FormGroup;
  id!:number;
  valorAdmin!:boolean;

  constructor(
    private dialogRef: MatDialogRef<AltaUsuarioComponent>,
    private storeUsuarios: Store<Usuario>,
    private snackBar: MatSnackBar
  ) {

    this.formulario= new FormGroup({
      nameUsuario: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      contrasena: new FormControl('',[Validators.required,Validators.minLength(8)]),
      correo: new FormControl('',[Validators.required, Validators.email]),
      admin: new FormControl(''),
      direccion: new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(25)]),
      telefono: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(15)])
    })

  }

  ngOnInit(): void {
  }

  agregarUsuario(){

    const u:Usuario ={
      nameUsuario:this.formulario.value.nameUsuario,
      contrasena: this.formulario.value.contrasena,
      admin:this.valorAdmin,
      id: this.id,
      correo: this.formulario.value.correo,
      direccion: this.formulario.value.direccion,
      telefono: this.formulario.value.telefono
    };

    this.storeUsuarios.dispatch(agregarUsuario({usuario:u}));
    this.snackBar.open( `${u.nameUsuario} agregado `,'' , {
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
