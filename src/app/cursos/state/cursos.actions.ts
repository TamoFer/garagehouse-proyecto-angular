import { createAction, props } from '@ngrx/store';

export const loadCursoss = createAction(
  '[Cursos] Load Cursoss'
);

export const loadCursossSuccess = createAction(
  '[Cursos] Load Cursoss Success',
  props<{ data: any }>()
);

export const loadCursossFailure = createAction(
  '[Cursos] Load Cursoss Failure',
  props<{ error: any }>()
);
