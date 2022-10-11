import { Curso } from './../../models/curso';
import { Alumnos } from './../../models/alumnos';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  curso!:Curso;

  listaAlumnos: Alumnos[]=[
    {idAlumno: 1,
    nombre: 'Ijak',
    apellido:'Perez',
    correo:'ijak@perez.com',
    cursoActual:this.curso={id:1,nombre:'Desarrollo Web',profesor:'Matias Cordoba', finicio:new Date(2022,3,15),ftermino:new Date(2022,5,15),descripcion:'Curso incial de programacion web donde veras HTML 5 y CSS3 entre demas cosas',disponibilidad:true}},
    {idAlumno: 2,
      nombre: 'Abner',
      apellido:'Gonzales',
      correo:'abner@gonzales.com',
      cursoActual:this.curso={id: 2, nombre:'Javacript', profesor: 'Anthony Lopez', finicio: new Date(2022,5,29), ftermino: new Date(2022,7,10), descripcion: 'Curso donde aprenderas a potenciar tus conocimientos de maquetacion con Javascript', disponibilidad:true}}
  ]

  columnas: string[] = ['nombre', 'correo', 'cursando', 'actions'];
  data: MatTableDataSource<Alumnos> = new MatTableDataSource<Alumnos>(this.listaAlumnos);

  constructor() { }

  ngOnInit(): void {
  }

  agregarAlumno(){

  }
  editAlumno(id:number){}
  deleteAlumno(id:number){}

  filtrarNombre(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.data.filterPredicate = function(alumno: Alumnos, filtro: string){
      return alumno.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.data.filter = valorObtenido.trim().toLowerCase();
  }

  filtrarCurso(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.data.filterPredicate = function(alumno: Alumnos, filtro: string){
      return alumno.cursoActual.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.data.filter = valorObtenido.trim().toLowerCase();
  }

}
