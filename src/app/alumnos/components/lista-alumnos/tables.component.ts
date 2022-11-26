import { cargarCursos } from './../../../cursos/state/cursos.actions';
import { MatDialog } from '@angular/material/dialog';
import { EditarAlumnoComponent } from './../editar-alumno/editar-alumno.component';
import { selectAlumnos } from './../../state/alumnos.selectors';
import { alumnosCargados, editarAlumno, eliminarAlumno, cargarAlumnos } from './../../state/alumnos.actions';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { Alumnos } from 'src/app/models/alumnos';
import { Component, OnInit, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListaAlumnosService } from 'src/app/alumnos/services/lista-alumnos.service';
import { map, Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Store } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';
import { AlumnoState } from 'src/app/models/models-state/alumno.state';
import { AgregarAlumnoComponent } from '../agregar-alumno/agregar-alumno.component';
import { ToolbarTitleService } from 'src/app/service/toolbar-title.service';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { Curso } from 'src/app/models/curso';
import { cursosCargados } from 'src/app/cursos/state/cursos.actions';
import { selectCursos } from 'src/app/cursos/state/cursos.selectors';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  suscripcionSesion!: Subscription;
  suscripcionAlumnos!: Subscription;
  suscripcionAlumnosData!: Subscription;
  suscripcionCursos!: Subscription;

  usuarioActivo?: Usuario;
  columnasAdmin: string[] = ['nombre', 'apellido', 'correo', 'cursando', 'actions'];
  columnasUsuario: string[] = ['nombre', 'apellido', 'correo', 'cursando'];
  data: MatTableDataSource<Alumnos> = new MatTableDataSource<Alumnos>();
  busquedaEnTabla!: FormGroup;
  seccion: string = 'Alumnos'
  cursos: Array<any> = [];


  constructor(
    private toolbarService: ToolbarTitleService,
    private storeSesion: Store<Sesion>,
    private storeAlumnos: Store<AlumnoState>,
    private storeCursos: Store<Curso>,
    private dialog: MatDialog
  ) {
    this.toolbarService.editarTitleComponent(this.seccion)
  }

  ngOnInit(): void {

    this.cursos.push(this.storeCursos.select(selectCursos).subscribe((cursos) => { this.cursos = cursos }));

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
    this.suscripcionAlumnosData.unsubscribe();
    this.suscripcionSesion.unsubscribe();
  }

  buscarXApellido() {
    const valorObtenido = this.busquedaEnTabla.get('apellido')?.value;
    this.storeAlumnos.select(selectAlumnos).pipe(
      map((alumnos: Alumnos[]) => alumnos.filter((a: Alumnos) =>
        a.apellido.toLowerCase() == valorObtenido.toLowerCase())
      )
    ).subscribe((alumnos) => {
      this.data.data = alumnos;
    })
  }

  buscarXCurso() {
    const valorObtenido = this.busquedaEnTabla.get('curso')?.value;
    this.storeAlumnos.select(selectAlumnos).pipe(
      map((alumnos: Alumnos[]) => alumnos.filter((a: Alumnos) =>
        a.cursoActual?.nombre.toLowerCase() == valorObtenido.toLowerCase())
      )
    ).subscribe((alumnos) => {
      this.data.data = alumnos;
    })
  }

  vaciarCampoCurso() {
    this.busquedaEnTabla.get('curso')?.reset();
    this.storeAlumnos.select(selectAlumnos).subscribe((alumnos: Alumnos[]) => {
      this.data = new MatTableDataSource<Alumnos>(alumnos)
    });
  }

  vaciarCampoApellido() {
    this.busquedaEnTabla.get('apellido')?.reset();
    this.storeAlumnos.select(selectAlumnos).subscribe((alumnos: Alumnos[]) => {
      this.data = new MatTableDataSource<Alumnos>(alumnos)
    });
  }

  agregarAlumno() {
    this.dialog.open(AgregarAlumnoComponent, {})
  }

  editarAlumno(alumno: Alumnos) {
    this.dialog.open(EditarAlumnoComponent, {
      data: alumno
    })
  }

  borrarAlumno(alumno: Alumnos) {
    this.storeAlumnos.dispatch(eliminarAlumno({ alumno }))
  }


}

