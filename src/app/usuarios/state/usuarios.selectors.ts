import { UsuarioState } from 'src/app/models/models-state/usuario.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsuarios from './usuarios.reducer';

export const selectUsuariosState = createFeatureSelector<UsuarioState>(
  fromUsuarios.usuariosFeatureKey
);

export const selectUsuarios = createSelector(
  selectUsuariosState,
  (state: UsuarioState) => state.usuarios
)

export const selectUsuariosCargando = createSelector(
  selectUsuariosState,
  (state: UsuarioState) => state.cargando
)

