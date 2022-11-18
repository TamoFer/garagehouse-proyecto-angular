import { Inscripcion } from './../../models/inscripcion';
import { createAction, props } from '@ngrx/store';

export const cargarInscripciones = createAction(
  '[Lista Inscripciones] Cargar Inscripcions'
);

export const inscripcionesCargadas = createAction(
  '[Lista Inscripciones] Cargar Inscripcions Success',
  props<{ inscripciones: Inscripcion[] }>()
);

export const agregarInscripcion = createAction(
  '[Lista Inscripciones] Agregar Inscripcion',
  props<{ inscripcion: Inscripcion }>()
)

export const editarInscripcion = createAction(
  '[Lista Inscripciones] Editar Inscripcion',
  props<{ inscripcion: Inscripcion }>()
)

export const eliminarInscripcion = createAction(
  '[Lista Inscripciones] Eliminar Inscripcion',
  props<{ inscripcion: Inscripcion }>()
)
