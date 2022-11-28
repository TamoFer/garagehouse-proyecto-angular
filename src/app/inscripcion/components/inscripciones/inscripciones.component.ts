import { eliminarInscripcion, agregarInscripcion, cargarInscripciones } from './../../state/inscripcion.actions';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Inscripcion } from 'src/app/models/inscripcion';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { selectInscripciones } from '../../state/inscripcion.selectors';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { EditarInscripcionComponent } from '../editar-inscripcion/editar-inscripcion.component';
import { ToolbarTitleService } from 'src/app/core/services/toolbar-title.service';
import { Alumnos } from 'src/app/models/alumnos';
import { Curso } from 'src/app/models/curso';
import { AgregarInscripcionComponent } from '../agregar-inscripcion/agregar-inscripcion.component';



@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {

  suscripcionSesion!: Subscription;
  suscripcionInscripcionData!: Subscription;



  dataSource: MatTableDataSource<Inscripcion>= new MatTableDataSource<Inscripcion>();
  columnasUsuario: string[] = ['id_alumno', 'id_curso','id_usuario', 'fechaInscripcion'];
  columnasAdmin: string[] = ['id_alumno', 'id_curso','id_usuario', 'fechaInscripcion', 'acciones'];

  seccion: string='Inscripciones';
  usuarioActivo?: Usuario;

  constructor(
    private storeInscripciones: Store<Inscripcion>,
    private storeSesion: Store<Sesion>,
    private dialog: MatDialog,
    private toolbarService: ToolbarTitleService

  ) {
    this.storeInscripciones.dispatch(cargarInscripciones())
  }

  ngOnInit(): void {
    this.suscripcionInscripcionData= this.storeInscripciones.select(selectInscripciones).subscribe((inscripciones: Inscripcion[]) => {
      this.dataSource = new MatTableDataSource<Inscripcion>(inscripciones);
    });

    this.suscripcionSesion= this.storeSesion.select(selectSesionActiva).subscribe((sesion: Sesion) => {
      this.usuarioActivo = sesion.usuarioActivo;
    })

    this.toolbarService.editarTitleComponent(this.seccion)

  }

  ngOnDestroy(): void {
    this.suscripcionInscripcionData.unsubscribe();
    this.suscripcionSesion.unsubscribe();
  }

  editar(inscripcion: Inscripcion){
    this.dialog.open(EditarInscripcionComponent, {
      data: inscripcion
    })
  }

  eliminar(inscripcion: Inscripcion){
    this.storeInscripciones.dispatch(eliminarInscripcion({inscripcion}));
  }

  agregarInscripcion(){
    this.dialog.open(AgregarInscripcionComponent)
  }


}
