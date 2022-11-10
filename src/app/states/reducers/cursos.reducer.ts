import { agregarCurso, cargarCursos, cursosCargados, editarCurso, eliminarCurso } from './../actions/cursos.actions';
import { createReducer, on } from "@ngrx/store";
import { CursoState } from "src/app/models/curso.state";
import { Curso } from 'src/app/models/curso';

const estadoInicial: CursoState = {
  cargando: false,
  cursos: []
}

export const cursosReducer = createReducer(
  estadoInicial,
  on(cargarCursos, (estado) => {
    const estadoNuevo: CursoState = {
      cargando: true,
      cursos: estado.cursos
    }
    return estadoNuevo
  }),

  on(cursosCargados, (estado, { cursos }) => {
    const estadoNuevo: CursoState = {
      cargando: false,
      cursos: cursos
    }

    return estadoNuevo
  }),

  on(agregarCurso, (estado, { curso }) => {
    estado.cursos.map((cursoNuevo: Curso) => {
      if (curso === cursoNuevo) {
        estado.cursos.push(curso)
      }
      return estado.cursos
    })

    const estadoNuevo: CursoState = {
      cargando: false,
      cursos: estado.cursos
    }

    return estadoNuevo
  }),

  on(editarCurso, (estado, { curso }) => {
    estado.cursos.find((cursoBuscado: Curso) => {
      if (cursoBuscado === curso) {
        cursoBuscado = curso
      }
      return estado.cursos
    })

    const estadoNuevo: CursoState = {
      cargando: false,
      cursos: estado.cursos
    }

    return estadoNuevo
  }),

  on(eliminarCurso, (estado, { id }) => {
    estado.cursos.forEach((cursos) => {
      if (cursos.id === id) {
        let indice = estado.cursos.indexOf(cursos);
        estado.cursos= estado.cursos.splice(indice, 1);
      }
      return estado.cursos
    })


    const estadoNuevo: CursoState = {
      cargando: false,
      cursos: estado.cursos
    }

    return estadoNuevo

  })

)
