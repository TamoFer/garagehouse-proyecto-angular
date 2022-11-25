import { createAction, props } from '@ngrx/store';
import { Alumnos } from 'src/app/models/alumnos';
import { Curso } from 'src/app/models/curso';

export const cargarAlumnos = createAction(
  '[Lista Alumnos] Cargar Alumnos'

);

export const alumnosCargados = createAction(
  '[Lista Alumnos] Cargar Alumnos Success',
  props<{ alumnos: Alumnos[] }>()
);


export const agregarAlumno = createAction(
  '[Lista Alumnos] Agregar Alumno',
  props<{ alumno: Alumnos }>()
);

export const editarAlumno = createAction(
  '[Lista Alumnos] Editar Alumnos ',
  props<{ alumno: Alumnos }>()
);

export const eliminarAlumno = createAction(
  '[Lista Alumnos] Eliminar Alumnos ',
  props<{ alumno: Alumnos}>()
);



