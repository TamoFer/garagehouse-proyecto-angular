
import { UsuarioState } from './models/models-state/usuario.state';
import { AlumnoState } from "./models/models-state/alumno.state";
import { CursoState } from "./models/models-state/curso.state";
import { ActionReducerMap } from '@ngrx/store';
import { cursosReducer } from './cursos/state/cursos.reducer';
import { alumnosReducer } from './alumnos/state/alumnos.reducer';
import { inscripcionReducer } from './inscripcion/state/inscripcion.reducer';
import { usuariosReducer } from './usuarios/state/usuarios.reducer';
import { InscripcionState } from './models/models-state/inscripcion.state';

export interface AppState{
  cursos: CursoState
  alumnos:AlumnoState,
  usuarios: UsuarioState,
  inscripciones:InscripcionState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState>= {
  cursos: cursosReducer,
  alumnos: alumnosReducer,
  usuarios: usuariosReducer,
  inscripciones: inscripcionReducer
}

