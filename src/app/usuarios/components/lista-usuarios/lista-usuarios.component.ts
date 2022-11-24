import { selectUsuarios } from './../../state/usuarios.selectors';
import { eliminarUsuario, usuariosCargados } from './../../state/usuarios.actions';
import { UsuarioState } from './../../../models/models-state/usuario.state';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { map, Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';
import { AltaUsuarioComponent } from '../alta-usuario/alta-usuario.component';
import { ToolbarTitleService } from 'src/app/service/toolbar-title.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  suscripcionUsuarios!: Subscription;
  suscripcionUsuariosData!: Subscription;

  columnas: string[] = ['id', 'usuario', 'admin', 'actions'];
  data: MatTableDataSource<Usuario> = new MatTableDataSource<Usuario>();

  formulario!: FormGroup;

  seccion:string ='Usuarios';


  constructor(
    private usuariosService: UsuariosService,
    private storeUsuarios: Store<UsuarioState>,
    private dialog: MatDialog,
    private toolbarService: ToolbarTitleService

  ) {
    this.toolbarService.editarTitleComponent(this.seccion)

  }

  ngOnInit(): void {

    this.suscripcionUsuarios = this.usuariosService.obtenerUsuarios().subscribe({
      next: (usuarios: Usuario[]) => {
        this.storeUsuarios.dispatch(usuariosCargados({ usuarios }))
      }
    })

    this.suscripcionUsuariosData = this.storeUsuarios.select(selectUsuarios).subscribe((usuarios: Usuario[]) => {
      this.data = new MatTableDataSource<Usuario>(usuarios)
    })

    this.formulario = new FormGroup({
      nameUser: new FormControl('', []),
      id: new FormControl('', [])
    })

  }

  ngOnDestroy(): void {
    this.suscripcionUsuarios.unsubscribe();
    this.suscripcionUsuariosData.unsubscribe();
  }

  agregarUser() {
    this.dialog.open(AltaUsuarioComponent)

  }

  editarUser(user: Usuario) {
    this.dialog.open(EditarUsuarioComponent,{data: user})
  }

  eliminarUser(user: Usuario) {
    this.storeUsuarios.dispatch(eliminarUsuario({usuario:user}))
  }





  buscarXUser() {
    const valorObtenido = this.formulario.get('nameUser')?.value;
    this.storeUsuarios.select(selectUsuarios).pipe(
      map((usuarios: Usuario[]) => usuarios.filter((u: Usuario) =>
        u.nameUsuario.toLowerCase() === valorObtenido.toLowerCase())
      )
    ).subscribe((usuarios) => {
      this.data.data = usuarios;
    })
  }

  vaciarCampoUser() {
    this.formulario.get('nameUser')?.reset();
    this.storeUsuarios.select(selectUsuarios).subscribe((usuarios: Usuario[]) => {
      this.data = new MatTableDataSource<Usuario>(usuarios)
    });
  }

  buscarXid() {
    const valorObtenido = this.formulario.get('id')?.value;
    this.storeUsuarios.select(selectUsuarios).pipe(
      map((usuarios: Usuario[]) => usuarios.filter((u: Usuario) =>
        u.id === valorObtenido)
      )
    ).subscribe((usuarios) => {
      this.data.data = usuarios;
    })

  }
  vaciarCampoId() {
    this.formulario.get('id')?.reset();
    this.storeUsuarios.select(selectUsuarios).subscribe((usuarios: Usuario[]) => {
      this.data = new MatTableDataSource<Usuario>(usuarios)
    });
  }
}
