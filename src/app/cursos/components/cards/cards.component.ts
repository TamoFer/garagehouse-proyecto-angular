import { MatDialog } from '@angular/material/dialog';
import { cursosCargados, eliminarCurso } from './../../state/cursos.actions';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { selectCursos } from 'src/app/cursos/state/cursos.selectors';
import { Component, OnInit } from '@angular/core';
import { map,Subscription } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';
import { CursoState } from 'src/app/models/models-state/curso.state';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { MatTableDataSource } from '@angular/material/table';
import { AgregarCursoComponent } from '../agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';
import { ToolbarTitleService } from 'src/app/service/toolbar-title.service';
import { Inscripcion } from 'src/app/models/inscripcion';
import { agregarInscripcion } from 'src/app/inscripcion/state/inscripcion.actions';

@Component({
  selector: 'app-cards',
  templateUrl: `./cards.component.html`,
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {

  suscripcionCursos!: Subscription;
  suscripcionSesion!: Subscription;
  suscripcionCursoData!: Subscription;

  usuarioActivo?: Usuario;
  formulario!: FormGroup;

  columnasAdmin: string[] = ['nombre', 'profesor', 'disponibilidad', 'actions'];
  columnasUsuario: string[] = ['nombre', 'profesor', 'disponibilidad', 'inscripcion'];
  data: MatTableDataSource<Curso> = new MatTableDataSource<Curso>();
  seccion: string='Cursos';

  constructor(
    // private cursoService: CursosService,
    private storeCursos: Store<CursoState>,
    private storeSesion: Store<Sesion>,
    private dialog: MatDialog,
    private toolbarService: ToolbarTitleService,
    private storeInscripciones: Store<Inscripcion>
  ) {
    this.formulario = new FormGroup({
      profesor: new FormControl('', []),
      curso: new FormControl('', [])
    })
  }

  ngOnInit(): void {
    // this.suscripcionCursos = this.cursoService.obtenerCursos().subscribe({
    //   next: (cursos: Curso[]) => {
    //     this.storeCursos.dispatch(cursosCargados({ cursos }));
    //   }
    // });

    this.suscripcionSesion = this.storeSesion.select(selectSesionActiva).subscribe((s: Sesion) => {
      this.usuarioActivo = s.usuarioActivo
    })

    this.suscripcionCursoData = this.storeCursos.select(selectCursos).subscribe((cursos: Curso[]) => {
      this.data = new MatTableDataSource<Curso>(cursos);
    });

    this.toolbarService.editarTitleComponent(this.seccion)
  }

  ngOnDestroy(): void {
    // this.suscripcionCursos.unsubscribe();
    this.suscripcionCursoData.unsubscribe();
    this.suscripcionSesion.unsubscribe();
  }

  agregarCurso() {
    this.dialog.open(AgregarCursoComponent,{})
  }


  editarDatos(curso: Curso) {
    this.dialog.open(EditarCursoComponent, {
      data: curso
    })
  }

  eliminarCurso(curso: Curso) {
    this.storeCursos.dispatch(eliminarCurso({curso}))
  }

  buscarXProfesor() {
    const valorObtenido = this.formulario.get('profesor')?.value;
    this.storeCursos.select(selectCursos).pipe(
      map((cursos: Curso[]) => cursos.filter((c: Curso) =>
        c.profesor.toLowerCase() === valorObtenido.toLowerCase())
      )
    ).subscribe((cursos) => {
      this.data.data = cursos
    })
  }


  vaciarCampoProfesor() {
    this.formulario.get('profesor')?.reset()
    this.storeCursos.select(selectCursos).subscribe((cursos: Curso[]) => {
      this.data = new MatTableDataSource<Curso>(cursos);
    })
  }

  buscarXCurso() {
    const valorObtenido = this.formulario.get('curso')?.value;
    this.storeCursos.select(selectCursos).pipe(
      map((cursos: Curso[]) => cursos.filter((c: Curso) =>
        c.nombre.toLowerCase() === valorObtenido.toLowerCase())
      )
    ).subscribe((cursos) => {
      this.data.data = cursos
    })

  }

  vaciarCampoCurso() {
    this.formulario.get('curso')?.reset()
    this.storeCursos.select(selectCursos).subscribe((cursos: Curso[]) => {
      this.data = new MatTableDataSource<Curso>(cursos);
    })
  }

  inscribirme(curso:Curso) {
    const inscripcion: Inscripcion = {
        id: 0,
        curso: curso,
        alumno: this.usuarioActivo?.estudiante,
        fechaInscripcion: new Date()
      };
      this.storeInscripciones.dispatch(agregarInscripcion({inscripcion}));

  }

}
