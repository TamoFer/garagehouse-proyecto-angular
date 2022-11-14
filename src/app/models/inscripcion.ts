import { Alumnos } from './alumnos';
import { Curso } from "./curso";

export interface Inscripcion {
  id: number;
  curso: Curso;
  alumno: Alumnos;
  fechaInscripcion: Date;
}
