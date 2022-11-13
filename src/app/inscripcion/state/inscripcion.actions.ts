import { createAction, props } from '@ngrx/store';

export const loadInscripcions = createAction(
  '[Inscripcion] Load Inscripcions'
);

export const loadInscripcionsSuccess = createAction(
  '[Inscripcion] Load Inscripcions Success',
  props<{ data: any }>()
);

export const loadInscripcionsFailure = createAction(
  '[Inscripcion] Load Inscripcions Failure',
  props<{ error: any }>()
);
