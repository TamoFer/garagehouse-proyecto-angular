import { createAction, props } from '@ngrx/store';
import { Alumnos } from 'src/app/models/alumnos';

export const loadAlumnos = createAction(
  '[Lista Alumnos] Load Alumnos'

);

export const loadAlumnosSuccess = createAction(
  '[Lista Alumnos] Load Alumnos Success',
  props<{ alumnos: Alumnos[] }>()
);

export const loadAlumnosFailure = createAction(
  '[Lista Alumnos] Load Alumnos Failure',
  props<{ error: any }>()
);
