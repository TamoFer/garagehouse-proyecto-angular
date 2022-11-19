import { cursosCargados } from './../../state/cursos.actions';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { selectCursos } from 'src/app/cursos/state/cursos.selectors';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';
import { CursoState } from 'src/app/models/models-state/curso.state';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { MatTableDataSource } from '@angular/material/table';

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

  constructor(
    private cursoService: CursosService,
    private router: Router,
    private storeCursos: Store<CursoState>,
    private storeSesion: Store<Sesion>
  ) {
    this.formulario = new FormGroup({
      profesor: new FormControl('', []),
      curso: new FormControl('', [])
    })
  }

  ngOnInit(): void {
    this.suscripcionCursos = this.cursoService.obtenerCursos().subscribe({
      next: (cursos: Curso[]) => {
        this.storeCursos.dispatch(cursosCargados({ cursos }));
      }
    });

    this.suscripcionSesion = this.storeSesion.select(selectSesionActiva).subscribe((s: Sesion) => {
      this.usuarioActivo = s.usuarioActivo
    })

    this.suscripcionCursoData = this.storeCursos.select(selectCursos).subscribe((cursos: Curso[]) => {
      this.data = new MatTableDataSource<Curso>(cursos);
    });

  }

  ngOnDestroy(): void {
    this.suscripcionCursos.unsubscribe();
    this.suscripcionCursoData.unsubscribe();
    this.suscripcionSesion.unsubscribe();
  }

  agregarCurso() {
    this.router.navigate(['cursos/agregar-curso'])
  }


  editarDatos(curso: Curso) {
    this.router.navigate(['cursos/editar-curso', curso])
  }

  eliminarCurso(id: number) {
    // this.store.dispatch(eliminarCurso({id}))
    // this.cursosService.eliminarCurso(id)
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

  inscribirme(){
    alert('Proximanente pa')
  }

  // inscribir(curso: Curso){
  //   if(this.usuarioActivo){
  //     const inscripcion: Inscripcion = {
  //       id: 0,
  //       curso: curso,
  //       alumno: this.usuarioActivo,
  //       fechaInscripcion: new Date()
  //     };
  //     this.storeInscripciones.dispatch(agregarInscripcion({inscripcion}));
  //   }
  // }

}
