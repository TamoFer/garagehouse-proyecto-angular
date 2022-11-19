import { Action, createReducer, emptyProps, on } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';
import * as SesionActions from './sesion.actions';

export const sesionFeatureKey = 'sesion';

export const estadoInicial: Sesion = {
  sesionActiva: false
}

export const reducer = createReducer(
  estadoInicial,

  on(SesionActions.cargarSesion, state => state),

  on(SesionActions.sesionCargada, (state, {usuarioActivo}) => {
    return {...state, sesionActiva: true, usuarioActivo: usuarioActivo}
  }),

  on(SesionActions.cerrarSesion, state => {
    return {...state, sesionActiva: false}
  }),
);
