import { Alumnos } from './../models/alumnos';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {

  transform(objeto: Alumnos):string {
    return `${objeto.nombre} ${objeto.apellido}`;
  }

}
