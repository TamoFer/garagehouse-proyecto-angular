import { MatDialog } from '@angular/material/dialog';
import { EditarAlumnoComponent } from './../editar-alumno/editar-alumno.component';
import { selectAlumnos } from './../../state/alumnos.selectors';
import { eliminarAlumno } from './../../state/alumnos.actions';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { Alumnos } from 'src/app/models/alumnos';
import { Component, OnInit, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Store } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';
import { AlumnoState } from 'src/app/models/models-state/alumno.state';
import { AgregarAlumnoComponent } from '../agregar-alumno/agregar-alumno.component';
import { ToolbarTitleService } from 'src/app/core/services/toolbar-title.service';
import { Curso } from 'src/app/models/curso';
import { selectCursos } from 'src/app/cursos/state/cursos.selectors';
import { VerDetallesComponentAlumno } from '../ver-detalles-alumno/ver-detalles-alumno.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  suscripcionSesion!: Subscription;
  suscripcionAlumnosData!: Subscription;
  opened = false;

  usuarioActivo?: Usuario;
  columnasAdmin: string[] = ['nombre', 'apellido', 'cursando', 'actions'];
  columnasUsuario: string[] = ['nombre', 'apellido', 'cursando'];
  data: MatTableDataSource<Alumnos> = new MatTableDataSource<Alumnos>();
  busquedaEnTabla!: FormGroup;
  seccion: string = 'Alumnos'
  cursos$!: Observable<Curso[]>;


  constructor(
    private toolbarService: ToolbarTitleService,
    private storeSesion: Store<Sesion>,
    private storeAlumnos: Store<AlumnoState>,
    private storeCursos: Store<Curso>,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.toolbarService.editarTitleComponent(this.seccion)
  }

  ngOnInit(): void {

    this.cursos$ = this.storeCursos.select(selectCursos)

    this.suscripcionSesion = this.storeSesion.select(selectSesionActiva).subscribe((datos) => {
      this.usuarioActivo = datos.usuarioActivo
    })

    this.suscripcionAlumnosData = this.storeAlumnos.select(selectAlumnos).subscribe((alumnos: Alumnos[]) => {
      this.data = new MatTableDataSource<Alumnos>(alumnos)
    })

    this.busquedaEnTabla = new FormGroup({
      apellido: new FormControl('', []),
      curso: new FormControl('', [])
    })
  }

  ngOnDestroy(): void {
    if (this.suscripcionAlumnosData!=undefined) {
      this.suscripcionAlumnosData.unsubscribe();
    }
    if (this.suscripcionSesion!=undefined) {
      this.suscripcionSesion.unsubscribe();
    }
  }

  buscarXApellido() {
    const valorObtenido = this.busquedaEnTabla.get('apellido')?.value;
    if (valorObtenido === '' || valorObtenido === null || valorObtenido === undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingresa el nombre del alumno para buscarlo'
      })
    } else {
      this.storeAlumnos.select(selectAlumnos).pipe(
        map((alumnos: Alumnos[]) => alumnos.filter((a: Alumnos) =>
          a.apellido.toLowerCase() == valorObtenido.toLowerCase())
        )
      ).subscribe((alumnos) => {
        this.data.data = alumnos;
      })
    }

  }

  buscarXCurso() {
    const valorObtenido = this.busquedaEnTabla.get('curso')?.value;
    if (valorObtenido === '' || valorObtenido === null || valorObtenido === undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingresa el nombre del curso para buscarlo'
      })
    } else {
      this.storeAlumnos.select(selectAlumnos).pipe(
        map((alumnos: Alumnos[]) => alumnos.filter((a: Alumnos) =>
          a.cursoActual?.nombre.toLowerCase() == valorObtenido.toLowerCase())
        )
      ).subscribe((alumnos) => {
        this.data.data = alumnos;
      })
    }

  }

  vaciarCampoCurso() {
    this.busquedaEnTabla.get('curso')?.reset();
    this.suscripcionAlumnosData = this.storeAlumnos.select(selectAlumnos).subscribe((alumnos: Alumnos[]) => {
      this.data = new MatTableDataSource<Alumnos>(alumnos)
    })
  }

  vaciarCampoApellido() {
    this.busquedaEnTabla.get('apellido')?.reset();
    this.suscripcionAlumnosData = this.storeAlumnos.select(selectAlumnos).subscribe((alumnos: Alumnos[]) => {
      this.data = new MatTableDataSource<Alumnos>(alumnos)
    })
  }

  agregarAlumno() {
    this.dialog.open(AgregarAlumnoComponent, {})
  }

  editarAlumno(alumno: Alumnos) {
    this.dialog.open(EditarAlumnoComponent, {
      data: alumno,
      width: 'auto',
      height: '36rem'
    })
  }

  borrarAlumno(alumno: Alumnos) {
    Swal.fire({
      title: `¿Estas seguro de borrar a ${alumno.nombre.toLocaleUpperCase()}?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.storeAlumnos.dispatch(eliminarAlumno({ alumno }));
        this.snackBar.open(`${alumno.nombre} ${alumno.apellido} eliminado `, '', {
          duration: 1500,
          panelClass: ['mat-toolbar', 'mat-warn'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    })

  }

  verDetalles(alumno: Alumnos) {
    this.dialog.open(VerDetallesComponentAlumno, {
      data: alumno,
      width: '50rem',
      height: 'auto'
    })
  }

}
