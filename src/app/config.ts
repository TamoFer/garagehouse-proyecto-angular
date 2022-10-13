import { ListaAlumnosService } from './services/lista-alumnos.service';
import { CursosService } from './services/cursos.service';
import { InjectionToken } from "@angular/core";

export interface Configuracion{
      cursos: CursosService,
      alumnos: ListaAlumnosService
};

export const config: Configuracion = {
      cursos: new CursosService(),
      alumnos: new ListaAlumnosService()
};

export const token = new InjectionToken<Configuracion>('settings')
