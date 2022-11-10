import { Alumnos } from 'src/app/models/alumnos';

export interface AlumnoState {
  cargando:boolean,
  alumnos: Alumnos[]
}
