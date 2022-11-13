import { cursosReducer } from './reducers/cursos.reducer';
import { UsuarioState } from './../models/models-state/usuario.state';
import { AlumnoState } from "../models/models-state/alumno.state";
import { CursoState } from "./../models/models-state/curso.state";
import { ActionReducerMap } from '@ngrx/store';

export interface AppState{
  cursos: CursoState
  // alumnos:AlumnoState,
  // usuarios: UsuarioState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState>= {
  cursos: cursosReducer
  // alumnos: undefined,
  // usuarios: undefined
}

