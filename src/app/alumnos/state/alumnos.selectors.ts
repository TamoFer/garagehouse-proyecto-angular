import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlumnoState } from 'src/app/models/models-state/alumno.state';
import * as fromAlumnos from './alumnos.reducer';

export const selectAlumnosState = createFeatureSelector<AlumnoState>(
  fromAlumnos.alumnosFeatureKey
);

export const selectAlumnos = createSelector(
  selectAlumnosState,
  (state: AlumnoState) => state.alumnos
)

export const selectAlumnosCargando = createSelector(
  selectAlumnosState,
  (state: AlumnoState) => state.cargando
)

