import { createReducer, on } from '@ngrx/store';
import { CursoState } from 'src/app/models/models-state/curso.state';
import * as CursosActions from './cursos.actions';

export const cursosFeatureKey = 'cursos';

export const estadoInicial: CursoState = {
  cargando:false,
  cursos: []
}


export const cursosReducer = createReducer(
  estadoInicial,

  on(CursosActions.cargarCursos, state =>{
    return {...state, cargando: true};
  }),

  on(CursosActions.cursosCargados, (state, {cursos}) => {
    return {...state, cargando: false, cursos}
  }),

  on(CursosActions.agregarCurso, (state, {curso}) => {
    return state
  }),

  on(CursosActions.editarCurso, (state, {curso}) => {
    return state
  }),

  on(CursosActions.eliminarCurso, (state, {curso}) => {
    return state
  })
);
