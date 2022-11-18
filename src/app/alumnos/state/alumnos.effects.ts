import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as AlumnosActions from './alumnos.actions';
import { ListaAlumnosService } from '../services/lista-alumnos.service';
import { Alumnos } from 'src/app/models/alumnos';


@Injectable()
export class AlumnosEffects {

  cargarAlumnos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnosActions.cargarAlumnos),
      concatMap(() => this.alumnos.obtenerAlumnos().pipe(
        map((alumnos: Alumnos[]) => AlumnosActions.alumnosCargados({alumnos:alumnos}))
      ))
    );
  });

  agregarAlumno$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnosActions.agregarAlumno),
      concatMap(({alumno}) => this.alumnos.agregarAlumnos(alumno).pipe(
        map((alumn: Alumnos) => AlumnosActions.cargarAlumnos())
      ))
    );
  });

  editarAlumno$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnosActions.editarAlumno),
      concatMap(({alumno}) => this.alumnos.editarAlumnos(alumno).pipe(
        map((alumn: Alumnos) => AlumnosActions.cargarAlumnos())
      ))
    );
  });

  eliminarAlumno$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnosActions.eliminarAlumno),
      concatMap(({alumno}) => this.alumnos.eliminarAlumnos(alumno).pipe(
        map((alumn: Alumnos) => AlumnosActions.cargarAlumnos())
      ))
    );
  });


  constructor(
    private actions$: Actions,
    private alumnos: ListaAlumnosService
    ) {}
}
