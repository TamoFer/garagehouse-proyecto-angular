import { createReducer, on } from '@ngrx/store';
import * as InscripcionActions from './inscripcion.actions';
import { InscripcionState } from 'src/app/models/models-state/inscripcion.state';

export const inscripcionFeatureKey = 'inscripcion';

export const estadoInicial: InscripcionState = {
  cargando:false,
  inscripciones: []
}



export const inscripcionReducer = createReducer(
  estadoInicial,

  on(InscripcionActions.cargarInscripciones, state => {
    return {...state, cargando: true};
  }),

  on(InscripcionActions.inscripcionesCargadas, (state, {inscripciones}) => {
    return {...state, cargando: false, inscripciones}
  }),

  on(InscripcionActions.agregarInscripcion, (state, {inscripcion}) => {
    return state
  }),

  on(InscripcionActions.editarInscripcion, (state, {inscripcion}) => {
    return state
  }),

  on(InscripcionActions.eliminarInscripcion, (state, {inscripcion}) => {
    return state
  })

);
