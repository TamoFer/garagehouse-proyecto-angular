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
    {nombre: 'Ijak',
    apellido:'Perez',
    correo:'ijak@perez.com',
    cursoActual:this.curso={id:1,nombre:'Desarrollo Web',profesor:'Matias Cordoba', finicio:new Date(2022,3,15),ftermino:new Date(2022,5,15),descripcion:'Curso incial de programacion web donde veras HTML 5 y CSS3 entre demas cosas',disponibilidad:true}}
  ]

  columns: string[] = ['nombre', 'apellido', 'correo', 'cursando', 'actions'];
  data: MatTableDataSource<Alumnos> = new MatTableDataSource<Alumnos>(this.listaAlumnos);

  constructor() { }

  ngOnInit(): void {
  }

}
