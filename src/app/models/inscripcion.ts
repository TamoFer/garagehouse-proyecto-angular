import { Alumnos } from 'src/app/models/alumnos';
import { Curso } from "./curso";

export interface Inscripcion {
  id: number;
  curso: Curso;
  alumno?: Alumnos;
  fechaInscripcion: Date;
}
