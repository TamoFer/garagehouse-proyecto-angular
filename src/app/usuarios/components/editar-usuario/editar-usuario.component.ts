import { Usuario } from 'src/app/models/usuario';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { editarUsuario } from '../../state/usuarios.actions';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public usuario:Usuario,
    private storeUsuario: Store<Usuario>
  ) {
    this.formulario= new FormGroup({
      nameUsuario: new FormControl(this.usuario.nameUsuario),
      contrasena: new FormControl(this.usuario.contrasena),
      admin: new FormControl(this.usuario.admin),
    })
  }

  ngOnInit(): void {
  }

  editarUsuario(){
    const u:Usuario = {
      id: this.usuario.id,
      nameUsuario: this.formulario.value.nameUsuario,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin
    }
    this.storeUsuario.dispatch(editarUsuario({usuario:u}))
    this.dialogRef.close();
  }

  retroceder(){
    this.dialogRef.close();
  }
}
