import { Curso } from './../../models/curso';
import { Datos } from '../../data/data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cursos:Curso[]=Datos.cursos;

  constructor() { }

  ngOnInit(): void {
  }

}
