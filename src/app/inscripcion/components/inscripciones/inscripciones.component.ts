import { eliminarInscripcion, agregarInscripcion, cargarInscripciones } from './../../state/inscripcion.actions';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Inscripcion } from 'src/app/models/inscripcion';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { selectInscripciones } from '../../state/inscripcion.selectors';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { EditarInscripcionComponent } from '../editar-inscripcion/editar-inscripcion.component';
import { ToolbarTitleService } from 'src/app/core/services/toolbar-title.service';
import { AgregarInscripcionComponent } from '../agregar-inscripcion/agregar-inscripcion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {

  suscripcionSesion!: Subscription;
  suscripcionInscripcionData!: Subscription;
  opened = false;



  dataSource: MatTableDataSource<Inscripcion> = new MatTableDataSource<Inscripcion>();
  columnasUsuario: string[] = ['id_alumno', 'id_curso', 'id_usuario', 'fechaInscripcion'];
  columnasAdmin: string[] = ['id_alumno', 'id_curso', 'id_usuario', 'fechaInscripcion', 'acciones'];

  seccion: string = 'Inscripciones';
  usuarioActivo?: Usuario;

  constructor(
    private storeInscripciones: Store<Inscripcion>,
    private storeSesion: Store<Sesion>,
    private dialog: MatDialog,
    private toolbarService: ToolbarTitleService,
    private snackBar: MatSnackBar

  ) {
    this.storeInscripciones.dispatch(cargarInscripciones())
    this.toolbarService.editarTitleComponent(this.seccion)
  }

  ngOnInit(): void {
    this.suscripcionInscripcionData = this.storeInscripciones.select(selectInscripciones).subscribe((inscripciones: Inscripcion[]) => {
      this.dataSource = new MatTableDataSource<Inscripcion>(inscripciones);
    });

    this.suscripcionSesion = this.storeSesion.select(selectSesionActiva).subscribe((sesion: Sesion) => {
      this.usuarioActivo = sesion.usuarioActivo;
    })


  }

  ngOnDestroy(): void {
    this.suscripcionInscripcionData.unsubscribe();
    this.suscripcionSesion.unsubscribe();
  }

  editar(inscripcion: Inscripcion) {
    this.dialog.open(EditarInscripcionComponent, {
      data: inscripcion
    })
  }


  agregarInscripcion() {
    this.dialog.open(AgregarInscripcionComponent)
  }

  eliminar(inscripcion: Inscripcion) {
    Swal.fire({
      title: `¿Borrar inscripcion?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.storeInscripciones.dispatch(eliminarInscripcion({ inscripcion }));
        this.snackBar.open(`Inscripcion #${inscripcion?.id} eliminada`, '', {
          duration: 1500,
          panelClass: ['mat-toolbar', 'mat-warn'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    })
  }

}
