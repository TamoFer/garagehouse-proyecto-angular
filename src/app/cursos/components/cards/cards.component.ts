import { loadCursos } from './../../state/cursos.actions';
import { Usuario } from 'src/app/models/usuario';
import { selectCursos } from 'src/app/cursos/state/cursos.selectors';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';
import { CursoState } from 'src/app/models/models-state/curso.state';
import { loadCursosFailure, loadCursosSuccess } from '../../state/cursos.actions';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';

@Component({
  selector: 'app-cards',
  templateUrl: `./cards.component.html`,
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  suscripcionCursos!: Subscription;
  usuarioActivo!: Usuario | undefined;
  cursoBuscado!: any;


  constructor(
    private cursoService: CursosService,
    private router: Router,
    private storeCursos: Store<CursoState>,
    private storeSesion: Store<Sesion>
  ) {
    this.cursos$ = this.storeCursos.select(selectCursos);
    this.storeSesion.select(selectSesionActiva).subscribe((s: Sesion) => {
      this.usuarioActivo = s.usuarioActivo
    })

  }

  ngOnInit(): void {
    this.suscripcionCursos = this.cursoService.getCursos().subscribe({
      next: (cursos: Curso[]) => {
        this.cursoBuscado= cursos
        this.storeCursos.dispatch(loadCursosSuccess({ cursos }));
      },
      error: (error: any) => {
        alert("Hubo un error")
        this.storeCursos.dispatch(loadCursosFailure(error));
      }
    });
  }

  ngOnDestroy(): void {
    this.suscripcionCursos.unsubscribe();
  }

  inscripcion() {
    alert('Funcion en desarrollo, disculpe las molestias')
  }

  agregarCurso() {
    this.router.navigate(['cursos/agregar-curso'])
  }

  buscarXProfesor(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    if (valorObtenido === '') {
      this.cursos$ = this.storeCursos.select(selectCursos)
    } else {
      of(this.cursoBuscado).pipe(
        map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.profesor.toLowerCase() === valorObtenido.toLowerCase()))
      ).subscribe((cursos) => {
        this.cursos$ = new Observable<Curso[]>((sub) => {
          sub.next(cursos)
        });
      });
    }
  }

  buscarXNombre(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    if (valorObtenido === '') {
      this.cursos$ = this.storeCursos.select(selectCursos)
    } else {
      of(this.cursoBuscado).pipe(
        map((cursos: Curso[]) => cursos.filter((curso: Curso) =>  curso.nombre.toLowerCase() === valorObtenido.toLowerCase()))
      ).subscribe((cursos) => {
        this.cursos$ = new Observable<Curso[]>((sub) => {
          sub.next(cursos)
        });
      });
    }
  }

  editarDatos(curso: Curso) {
    this.router.navigate(['cursos/editar-curso', curso])
  }

  eliminarCurso(id: number) {
    // this.store.dispatch(eliminarCurso({id}))
    // this.cursosService.eliminarCurso(id)
  }

}
