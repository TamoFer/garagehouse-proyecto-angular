import { Curso } from 'src/app/models/curso';
import { createAction, props } from "@ngrx/store";

export const cargarCursos = createAction(
  '[Lista Cursos] Cargar Cursos'
)

export const cursosCargados = createAction(
  '[Lista Cursos] Cursos Cargados',
  props<{cursos: Curso[]}>()
)

export const agregarCurso = createAction(
  '[ABM Cursos] Agregar Curso',
  props<{curso:Curso}>()
)

export const editarCurso = createAction(
  '[ABM Cursos] Editar Curso',
  props<{curso:Curso}>()
)

export const eliminarCurso = createAction(
  '[ABM Cursos] Agregar Curso',
  props<{id:number}>()
)
