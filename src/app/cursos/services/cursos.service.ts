import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Curso } from '../../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos$: Observable<Curso[]>;
  private cursos: Curso[] = [
    { id: 1, nombre: 'Desarrollo Web', profesor: 'Matias Cordoba', finicio: new Date(2022, 3, 15), ftermino: new Date(2022, 5, 15), descripcion: 'Curso incial de programacion web donde veras HTML 5 y CSS3 entre demas cosas', disponibilidad: true, img: '../../assets/images/webdesing.jpg' },

    { id: 2, nombre: 'JavaScript', profesor: 'Anthony Lopez', finicio: new Date(2022, 5, 29), ftermino: new Date(2022, 7, 10), descripcion: 'Curso donde aprenderas a potenciar tus conocimientos de maquetacion con Javascript', disponibilidad: true, img: '../../assets/images/js.jpg' },

    { id: 3, nombre: 'React Js', profesor: 'Abner Garcia', finicio: new Date(2022, 7, 29), ftermino: new Date(2022, 9, 15), descripcion: 'Aprenderas uno de los frameworks mas populares de programacion front-end', disponibilidad: true, img: '../../assets/images/angular.jpg' },

    { id: 4, nombre: 'Angular', profesor: 'Abner Garcia', finicio: new Date(2022, 7, 29), ftermino: new Date(2022, 9, 15), descripcion: 'Aprenderas uno de los frameworks mas populares de programacion front-end', disponibilidad: false, img: '../../assets/images/angular.jpg' },

    { id: 5, nombre: 'Backend', profesor: 'Juan Pablo Guerrero', finicio: new Date(2022, 9, 29), ftermino: new Date(2022, 11, 15), descripcion: 'Curso donde aprenderas todo lo relacionado con el desarrollo backend de una APP web', disponibilidad: false, img: '../../assets/images/angular.jpg' },

    { id: 6, nombre: 'Python', profesor: 'Jacksito Gonzalez', finicio: new Date(2022, 8, 10), ftermino: new Date(2022, 10, 10), descripcion: 'Curso donde aprenderas a manejar el lenguaje de programacion mas versatil de la actualidad', disponibilidad: true, img: '../../assets/images/webdesing.jpg' }
  ]

  constructor() {
    this.cursos$ = new Observable<Curso[]>((sub) => {
      sub.next(this.cursos)
    });
  }

  obtenerCursos(): Curso[] {
    return this.cursos;
  }

  getCursosPromise(): Promise<Curso[] | any> {
    return new Promise((resolve, reject) => {
      if (this.cursos.length > 0) {
        resolve(this.cursos);
      } else {
        reject({
          codigo: 404,
          mensaje: 'Momentaneamente no hay cursos disponibles, en breves volveremos a darlos'
        });
      }
    });
  }

  getCursosObservable() {
    return this.cursos$;
  }
}

