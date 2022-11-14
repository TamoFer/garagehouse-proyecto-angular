import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';

export const loadUsuarios = createAction(
  '[Lista Usuarios] Load Usuarios'
);

export const loadUsuariosSuccess = createAction(
  '[Lista Usuarios] Load Usuarios Success',
  props<{ usuarios: Usuario[] }>()
);

export const loadUsuariosFailure = createAction(
  '[Lista Usuarios] Load Usuarioss Failure',
  props<{ error: any }>()
);
