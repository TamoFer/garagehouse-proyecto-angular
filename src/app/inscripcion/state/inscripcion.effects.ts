import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import * as InscripcionActions from './inscripcion.actions';
import { ListaInscripcionesService } from '../service/lista-inscripciones.service';
import { Inscripcion } from 'src/app/models/inscripcion';


@Injectable()
export class InscripcionEffects {

  cargarInscripciones$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionActions.cargarInscripciones),
      concatMap(() => this.inscripciones.obtenerInscripciones().pipe(
        map((i: Inscripcion[]) => InscripcionActions.inscripcionesCargadas({inscripciones: i}))
      ))
    );
  });

  agregarInscripciones$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionActions.agregarInscripcion),
      concatMap(({ inscripcion }) => this.inscripciones.agregarInscripcion(inscripcion).pipe(
        map((i: Inscripcion) => InscripcionActions.cargarInscripciones())
      ))
    );
  });

  eliminarInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionActions.eliminarInscripcion),
      concatMap(({ inscripcion }) => this.inscripciones.eliminarInscripcion(inscripcion).pipe(
        map((i: Inscripcion) => InscripcionActions.cargarInscripciones())
      ))
    );
  });

  editarInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionActions.editarInscripcion),
      concatMap(({ inscripcion }) => this.inscripciones.editarInscripcion(inscripcion).pipe(
        map((i: Inscripcion) => InscripcionActions.cargarInscripciones())
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private inscripciones: ListaInscripcionesService
  ) {}
}
