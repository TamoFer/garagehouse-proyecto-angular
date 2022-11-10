import { Alumnos } from 'src/app/models/alumnos';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';


export const cargarAlumnos = createAction(
  '[Lista Alumnos] Cargar Alumnos'
)

export const alumnosCargados = createAction(
  '[Lista Alumnos] Alumnos Cargados',
  props<{alumnos: Alumnos[]}>()
)

export const agregarAlumno = createAction(
  '[ABM Alumnos] Agregar Alumno',
  props<{alumno:Alumnos}>()
)

export const editarAlumno = createAction(
  '[ABM Alumnos] Editar Alumno',
  props<{alumno: Alumnos}>()
)

export const eliminarAlumno = createAction(
  '[ABM Alumnos] Eliminar Alumno',
  props<{id:number}>()
)

