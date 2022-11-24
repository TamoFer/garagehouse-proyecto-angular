import { Alumnos } from "./alumnos";

export interface Usuario{
  nameUsuario:string;
  contrasena: string;
  estudiante?:Alumnos;
  admin:boolean;
  id: number;
}
