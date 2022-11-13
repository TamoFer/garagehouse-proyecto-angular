import { Action, createReducer, on } from '@ngrx/store';
import * as InscripcionActions from './inscripcion.actions';

export const inscripcionFeatureKey = 'inscripcion';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(InscripcionActions.loadInscripcions, state => state),
  on(InscripcionActions.loadInscripcionsSuccess, (state, action) => state),
  on(InscripcionActions.loadInscripcionsFailure, (state, action) => state),

);
