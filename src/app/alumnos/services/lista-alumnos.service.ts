import { BehaviorSubject, Observable } from 'rxjs';
import { Alumnos } from '../../models/alumnos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService {

  private Alumnos$!: Observable<Alumnos[]>;
  private listaAlumnos: Alumnos[]=[
    {idAlumno: 1,
      nombre: 'Ijak',
      apellido:'Perez',
      correo:'ijak@perez.com',
      cursoActual:{id: 1, nombre:'Desarrollo Web', profesor: 'Matias Cordoba', finicio: new Date(2022,3,15), ftermino: new Date(2022,5,15), descripcion: 'Curso incial de programacion web donde veras HTML 5 y CSS3 entre demas cosas', disponibilidad:true, img:'../../assets/images/webdesing.jpg'}},

      {idAlumno: 2,
        nombre: 'Abner',
        apellido:'Gonzales',
        correo:'abner@gonzales.com',
        cursoActual:{id: 2, nombre:'JavaScript', profesor: 'Anthony Lopez', finicio: new Date(2022,5,29), ftermino: new Date(2022,7,10), descripcion: 'Curso donde aprenderas a potenciar tus conocimientos de maquetacion con Javascript', disponibilidad:true,img:'../../assets/images/js.jpg'}}
  ];

  constructor() {
    this.Alumnos$= new Observable<Alumnos[]>((sub)=>{
      sub.next(this.listaAlumnos)
    })
  }

  getAlumnosObservable(){
    return this.Alumnos$
  }

  agregarAlumno(alumno:Alumnos){
    this.listaAlumnos.push(alumno)
  }

  eliminarAlumno(id:number){
    let indice = this.listaAlumnos.findIndex((alumn: Alumnos) => alumn.idAlumno === id);

    if (indice > -1) {
      this.listaAlumnos.splice(indice, 1);
    }

    this.Alumnos$ = new Observable<Alumnos[]>((sub) => {
      sub.next(this.listaAlumnos)
    });
  }


}
