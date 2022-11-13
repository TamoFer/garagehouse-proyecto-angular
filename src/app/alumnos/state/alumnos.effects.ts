import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as AlumnosActions from './alumnos.actions';


@Injectable()
export class AlumnosEffects {

  loadAlumnoss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(AlumnosActions.loadAlumnoss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AlumnosActions.loadAlumnossSuccess({ data })),
          catchError(error => of(AlumnosActions.loadAlumnossFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
