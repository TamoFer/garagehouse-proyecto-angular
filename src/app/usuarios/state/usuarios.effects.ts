import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as UsuariosActions from './usuarios.actions';


@Injectable()
export class UsuariosEffects {

  loadUsuarioss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(UsuariosActions.loadUsuarioss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => UsuariosActions.loadUsuariossSuccess({ data })),
          catchError(error => of(UsuariosActions.loadUsuariossFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
