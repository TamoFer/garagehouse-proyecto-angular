import { selectUsuarios } from './../../state/usuarios.selectors';
import { eliminarUsuario, cargarUsuarios } from './../../state/usuarios.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { map, Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';
import { AltaUsuarioComponent } from '../alta-usuario/alta-usuario.component';
import { ToolbarTitleService } from 'src/app/core/services/toolbar-title.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  suscripcionUsuariosData!: Subscription;
  opened=false;
  formulario!: FormGroup;
  seccion:string ='Usuarios';


  columnas: string[] = ['id','usuario', 'admin','email','direccion','telefono', 'actions'];
  data: MatTableDataSource<Usuario> = new MatTableDataSource<Usuario>();



  constructor(
    private storeUsuarios: Store<Usuario>,
    private dialog: MatDialog,
    private toolbarService: ToolbarTitleService,
    private snackBar: MatSnackBar

  ) {
    this.toolbarService.editarTitleComponent(this.seccion);
    this.storeUsuarios.dispatch(cargarUsuarios())
  }

  ngOnInit(): void {

    this.suscripcionUsuariosData = this.storeUsuarios.select(selectUsuarios).subscribe((usuarios: Usuario[]) => {
      this.data = new MatTableDataSource<Usuario>(usuarios)
    })

    this.formulario = new FormGroup({
      nameUser: new FormControl('', []),
      id: new FormControl('', [])
    })

  }

  ngOnDestroy(): void {
    this.suscripcionUsuariosData.unsubscribe();
  }

  agregarUser() {
    this.dialog.open(AltaUsuarioComponent)

  }

  editarUser(user: Usuario) {
    this.dialog.open(EditarUsuarioComponent,{data: user})
  }

  eliminarUser(user: Usuario) {
    this.storeUsuarios.dispatch(eliminarUsuario({usuario:user}));
    this.snackBar.open( `${user.nameUsuario} eliminado `,'' , {
      duration: 1500,
      panelClass: ['mat-toolbar', 'mat-warn'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
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
