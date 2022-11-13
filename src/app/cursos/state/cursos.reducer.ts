import { Action, createReducer, on } from '@ngrx/store';
import * as CursosActions from './cursos.actions';

export const cursosFeatureKey = 'cursos';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(CursosActions.loadCursoss, state => state),
  on(CursosActions.loadCursossSuccess, (state, action) => state),
  on(CursosActions.loadCursossFailure, (state, action) => state),

);
