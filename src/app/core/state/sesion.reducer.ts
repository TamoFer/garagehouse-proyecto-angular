import { createReducer, on } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import * as SesionActions from './sesion.actions';

export const sesionFeatureKey = 'sesion';
const usuarioVacio: Usuario = {
  id: 0,
  correo: '',
  contrasena: '',
  nameUsuario: '',
  direccion: '',
  telefono: 0,
  admin: false
}
export const estadoInicial: Sesion = {
  sesionActiva: false,
  usuarioActivo: usuarioVacio
}

export const reducer = createReducer(
  estadoInicial,

  on(SesionActions.cargarSesion, state => state),

  on(SesionActions.sesionCargada, (state, { usuarioActivo }) => {
    return { ...state, sesionActiva: true, usuarioActivo: usuarioActivo }
  }),

  on(SesionActions.cerrarSesion, state => {
    return { ...state, sesionActiva: false }
  }),
);
