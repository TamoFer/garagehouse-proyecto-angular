import { selectUsuarios } from './../../state/usuarios.selectors';
import { agregarUsuario, cargarUsuarios, usuariosCargados } from './../../state/usuarios.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {

  formulario!: FormGroup;
  id!:number;
  suscripcionUsuarios!:Subscription;

  constructor(
    private dialogRef: MatDialogRef<AltaUsuarioComponent>,
    private usuariosService: UsuariosService,
    private storeUsuarios: Store<Usuario>

  ) {
    this.storeUsuarios.select(selectUsuarios).subscribe((datos)=>
    this.id= datos.length + 1);

    this.formulario= new FormGroup({
      nameUsuario: new FormControl(''),
      contrasena: new FormControl(''),
      admin: new FormControl(false),
    })

  }

  ngOnInit(): void {
    this.suscripcionUsuarios= this.usuariosService.obtenerUsuarios().subscribe({
      next:(usuarios: Usuario[])=>{
        this.storeUsuarios.dispatch(usuariosCargados({usuarios}))
      }
    })
  }


  agregarUsuario(){
    const u:Usuario = {
      id: this.id,
      nameUsuario: this.formulario.value.nameUsuario,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin
    }
    this.storeUsuarios.dispatch(agregarUsuario({usuario:u}))
    this.dialogRef.close();

  }

  retroceder(){
    this.dialogRef.close();
  }

}
