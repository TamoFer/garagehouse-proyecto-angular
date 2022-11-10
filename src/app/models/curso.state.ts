import { Curso } from 'src/app/models/curso';

export interface CursoState {
  cargando:boolean,
  cursos: Curso[]
}
