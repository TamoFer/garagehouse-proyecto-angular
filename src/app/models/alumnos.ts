import { Curso } from './curso';
export interface Alumnos {
  idAlumno:number;
  nombre: string;
  apellido: string;
  cursoActual: Curso;
}
