import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as SesionActions from './sesion.actions';


@Injectable()
export class SesionEffects {

  loadSesions$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SesionActions.loadSesions),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SesionActions.loadSesionsSuccess({ data })),
          catchError(error => of(SesionActions.loadSesionsFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
