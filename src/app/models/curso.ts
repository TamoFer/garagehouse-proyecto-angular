import { Clase } from './clase';
export interface Curso{
  nombre:string;
  finicio:Date;
  ftermino:Date;
  descripcion:string;
  clase:Clase;
}
