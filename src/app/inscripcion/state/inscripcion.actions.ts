import { Inscripcion } from './../../models/inscripcion';
import { createAction, props } from '@ngrx/store';

export const loadInscripcions = createAction(
  '[Lista Inscripciones] Load Inscripcions'
);

export const loadInscripcionsSuccess = createAction(
  '[Lista Inscripciones] Load Inscripcions Success',
  props<{ inscripciones: Inscripcion[] }>()
);

export const loadInscripcionsFailure = createAction(
  '[Lista Inscripciones] Load Inscripcions Failure',
  props<{ error: any }>()
);
