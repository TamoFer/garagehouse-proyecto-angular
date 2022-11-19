import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';

export const cargarSesion = createAction(
  '[Sesion] Cargar Sesions'
);

export const sesionCargada = createAction(
  '[Sesion] Cargar Sesions Success',
  props<{ usuarioActivo: Usuario }>()
);

export const cerrarSesion = createAction(
  '[Sesion] Cerrar Sesions'
);
