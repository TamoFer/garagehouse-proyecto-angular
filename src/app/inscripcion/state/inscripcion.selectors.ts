import { InscripcionState } from 'src/app/models/models-state/inscripcion.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripcion from './inscripcion.reducer';

export const selectInscripcionState = createFeatureSelector<InscripcionState>(
  fromInscripcion.inscripcionFeatureKey
);

export const selectInscripciones = createSelector(
  selectInscripcionState,
  (state: InscripcionState) => state.inscripciones
)

export const selectInscripcionesCargando = createSelector(
  selectInscripcionState,
  (state: InscripcionState) => state.cargando
)
