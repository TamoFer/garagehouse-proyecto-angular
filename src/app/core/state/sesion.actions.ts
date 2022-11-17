import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';

export const loadSesion = createAction(
  '[Sesion] Load Sesions'
);

export const loadSesionSuccess = createAction(
  '[Sesion] Load Sesions Success',
  props<{ usuarioActivo: Usuario }>()
);

