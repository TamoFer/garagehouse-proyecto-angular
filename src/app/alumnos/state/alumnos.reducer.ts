import { createReducer, on } from '@ngrx/store';
import { AlumnoState } from 'src/app/models/models-state/alumno.state';
import * as AlumnosActions from './alumnos.actions';

export const alumnosFeatureKey = 'alumnos';

export const estadoInicial: AlumnoState = {
  cargando:false,
  alumnos: []
}

export const reducer = createReducer(
  estadoInicial,

  on(AlumnosActions.loadAlumnos, state => {
    return {...state, cargando: true};
  }),

  on(AlumnosActions.loadAlumnosSuccess, (state, {alumnos}) => {
    return {...state,cargando: false, alumnos}
  }),

  on(AlumnosActions.loadAlumnosFailure, (state, {error}) => {
    return state
  }),

);
