import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';

export const cargarUsuarios = createAction(
  '[Lista Usuarios] Cargar Usuarios'
);

export const usuariosCargados = createAction(
  '[Lista Usuarios] Cargar Usuarios Success',
  props<{ usuarios: Usuario[] }>()
);


export const agregarUsuario = createAction(
  '[Lista Usuarios] Agregar Usuario',
  props<{ usuario: Usuario }>()
);


export const editarUsuario = createAction(
  '[Lista Usuarios] Editar Usuario',
  props<{ usuario: Usuario }>()
);


export const eliminarUsuario = createAction(
  '[Lista Usuarios] Eliminar Usuario',
  props<{ usuario: Usuario }>()
);

