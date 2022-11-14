import { CursoState } from 'src/app/models/models-state/curso.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursos from './cursos.reducer';

export const selectCursosState = createFeatureSelector<CursoState>(
  fromCursos.cursosFeatureKey
);

export const selectCursos = createSelector(
  selectCursosState,
  (state: CursoState) => state.cursos
)

export const selectCursosCargando = createSelector(
  selectCursosState,
  (state: CursoState) => state.cargando
)
