import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import * as CursosActions from './cursos.actions';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../services/cursos.service';


@Injectable()
export class CursosEffects {

  cargarCursos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.cargarCursos),
      concatMap(() => this.cursos.obtenerCursos().pipe(
        map((cursos: Curso[]) => CursosActions.cursosCargados({cursos:cursos}))
      ))
    );
  });

  agregarCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.agregarCurso),
      concatMap(({curso}) => this.cursos.agregarCurso(curso).pipe(
        map((curso: Curso) => CursosActions.cargarCursos())
      ))
    );
  });

  editarCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.editarCurso),
      concatMap(({curso}) => this.cursos.editarCurso(curso).pipe(
        map((curso: Curso) => CursosActions.cargarCursos())
      ))
    );
  });

  eliminarCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.eliminarCurso),
      concatMap(({curso}) => this.cursos.eliminarCurso(curso).pipe(
        map((curso: Curso) => CursosActions.cargarCursos())
      ))
    );
  });


  constructor(
    private actions$: Actions,
    private cursos: CursosService
    ) {}
}
