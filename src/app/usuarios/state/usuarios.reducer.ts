import { Action, createReducer, on } from '@ngrx/store';
import { UsuarioState } from 'src/app/models/models-state/usuario.state';
import * as UsuariosActions from './usuarios.actions';

export const usuariosFeatureKey = 'usuarios';

export const estadoInicial:UsuarioState ={
  cargando: false,
  usuarios: []
}

export const reducer = createReducer(
  estadoInicial,

  on(UsuariosActions.loadUsuarios, state => {
    return {...state, cargando: true};
  }),

  on(UsuariosActions.loadUsuariosSuccess, (state, {usuarios}) => {
    return {...state, cargando:false, usuarios}
  }),

  on(UsuariosActions.loadUsuariosFailure, (state, action) => state),

);
