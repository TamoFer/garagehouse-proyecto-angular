import { Action, createReducer, on } from '@ngrx/store';
import * as AlumnosActions from './alumnos.actions';

export const alumnosFeatureKey = 'alumnos';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(AlumnosActions.loadAlumnoss, state => state),
  on(AlumnosActions.loadAlumnossSuccess, (state, action) => state),
  on(AlumnosActions.loadAlumnossFailure, (state, action) => state),

);
