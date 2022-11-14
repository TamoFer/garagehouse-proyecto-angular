import { createReducer, on } from '@ngrx/store';
import * as InscripcionActions from './inscripcion.actions';
import { InscripcionState } from 'src/app/models/models-state/inscripcion.state';

export const inscripcionFeatureKey = 'inscripcion';

export const estadoInicial: InscripcionState = {
  cargando:false,
  inscripciones: []
}



export const reducer = createReducer(
  estadoInicial,

  on(InscripcionActions.loadInscripcions, state => {
    return {...state, cargando: true};
  }),

  on(InscripcionActions.loadInscripcionsSuccess, (state, {inscripciones}) => {
    return {...state, cargando: false, inscripciones}
  }),

  on(InscripcionActions.loadInscripcionsFailure, (state, {error}) => {
    return state
  }),

);
