import { createAction, props } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';

export const cargarCursos = createAction(
  '[List Cursos] Cargar Cursos'
);

export const cursosCargados = createAction(
  '[Lista Cursos] Cargar Cursos Success',
  props<{ cursos: Curso[] }>()
);


export const agregarCurso = createAction(
  '[Lista Cursos] Agregar Curso',
  props<{ curso: Curso }>()
);

export const editarCurso = createAction(
  '[Lista Cursos] Editar Curso',
  props<{ curso: Curso }>()
);

export const eliminarCurso = createAction(
  '[Lista Cursos] Eliminar Curso',
  props<{ curso: Curso}>()
);
