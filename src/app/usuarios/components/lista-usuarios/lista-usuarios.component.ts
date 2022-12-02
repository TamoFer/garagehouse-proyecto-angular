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
import Swal from 'sweetalert2';
import { Sesion } from 'src/app/models/sesion';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  suscripcionUsuariosData!: Subscription;
  suscripcionSesion!: Subscription;
  opened = false;
  formulario!: FormGroup;
  seccion: string = 'Usuarios';
  usuarioActivo!: Usuario;



  columnas: string[] = ['id', 'usuario', 'admin', 'email', 'direccion', 'telefono', 'actions'];
  data: MatTableDataSource<Usuario> = new MatTableDataSource<Usuario>();



  constructor(
    private storeUsuarios: Store<Usuario>,
    private dialog: MatDialog,
    private toolbarService: ToolbarTitleService,
    private snackBar: MatSnackBar,
    private sesionStore: Store<Sesion>

  ) {
    this.toolbarService.editarTitleComponent(this.seccion);
    this.storeUsuarios.dispatch(cargarUsuarios());
    this.suscripcionSesion= this.sesionStore.select(selectSesionActiva).subscribe((datosSesion)=>{
      this.usuarioActivo= datosSesion.usuarioActivo
    })
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
    if (this.suscripcionUsuariosData!=undefined) {
      this.suscripcionUsuariosData.unsubscribe();
    }
    if (this.suscripcionSesion!=undefined) {
      this.suscripcionSesion.unsubscribe();
    }
  }

  agregarUser() {
    this.dialog.open(AltaUsuarioComponent)

  }

  editarUser(user: Usuario) {
    this.dialog.open(EditarUsuarioComponent, { data: user })
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
    this.suscripcionUsuariosData=this.storeUsuarios.select(selectUsuarios).subscribe((usuarios: Usuario[]) => {
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
    this.suscripcionUsuariosData=this.storeUsuarios.select(selectUsuarios).subscribe((usuarios: Usuario[]) => {
      this.data = new MatTableDataSource<Usuario>(usuarios)
    });
  }

  eliminarUser(user: Usuario) {
    Swal.fire({
      title: `¿Estas seguro de borrar a ${user.nameUsuario}?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.storeUsuarios.dispatch(eliminarUsuario({ usuario: user }));
        this.snackBar.open(`${user.nameUsuario} eliminado `, '', {
          duration: 1500,
          panelClass: ['mat-toolbar', 'mat-warn'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }}
    )
  }
}
