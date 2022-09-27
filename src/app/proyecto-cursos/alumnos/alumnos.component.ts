import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../models/alumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  top10: number = 10;
  titulo:boolean= true;


  listaCursos: Array<string>=
  [ 'Desarrollo Web',
    'JavaScript',
    'Angular',
    'React',
    'Python',
    'Backend'
  ];

  listaAlumnos: Array<Alumnos> = [
    {nombre: 'Abner', curso:'Desarrollo Web' , nota:10 },
    {nombre: 'Celeste', curso:'JavaScript' , nota:7},
    {nombre: 'Pablo', curso:'Angular' , nota:7},
    {nombre: 'Ijak', curso:'JavaScript' , nota:9},
    {nombre: 'Carlos', curso:'React' , nota:10},
    {nombre: 'Diego', curso:'Python' , nota:8},
    {nombre: 'Facundo', curso:'Backend' , nota:10},
    {nombre: 'Hernan', curso:'Backend' , nota:7},
    {nombre: 'Jesus', curso:'Desarrollo Web' , nota:9},
    {nombre: 'James', curso:'Desarrollo Web' , nota:7},
  ];

  constructor() { }
  ngOnInit(): void {
  }

}
