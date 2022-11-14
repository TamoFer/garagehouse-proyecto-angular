import { createAction, props } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';

export const loadCursos = createAction(
  '[List Cursos] Load Cursos'
);

export const loadCursosSuccess = createAction(
  '[Lista Cursos] Load Cursos Success',
  props<{ cursos: Curso[] }>()
);

export const loadCursosFailure = createAction(
  '[Lista Cursos] Load Cursos Failure',
  props<{ error: any }>()
);
