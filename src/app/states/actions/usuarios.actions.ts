import { Usuario } from 'src/app/models/usuario';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';


export const cargarUsuarios = createAction(
  '[Lista Usuarios] Cargar Usuarios'
)

export const usuariosCargados = createAction(
  '[Lista Usuarios] Cargados Usuarios',
  props<{alumnos: Usuario[]}>()
)

export const agregarUsuario = createAction(
  '[ABM Usuarios] Agregar Usuario',
  props<{usuario:Usuario}>()
)

export const editarAlumno = createAction(
  '[ABM Usuarios] Editar Usuario',
  props<{usuario:Usuario}>()
)

export const eliminarAlumno = createAction(
  '[ABM Usuarios] Eliminar Usuario',
  props<{id:number}>()
)
