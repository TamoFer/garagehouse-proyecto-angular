import { createAction, props } from '@ngrx/store';

export const loadAlumnoss = createAction(
  '[Alumnos] Load Alumnoss'
);

export const loadAlumnossSuccess = createAction(
  '[Alumnos] Load Alumnoss Success',
  props<{ data: any }>()
);

export const loadAlumnossFailure = createAction(
  '[Alumnos] Load Alumnoss Failure',
  props<{ error: any }>()
);
