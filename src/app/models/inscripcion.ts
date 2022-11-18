import { Usuario } from './usuario';
import { Curso } from "./curso";

export interface Inscripcion {
  id: number;
  curso: Curso;
  alumno: Usuario;
  fechaInscripcion: Date;
}
