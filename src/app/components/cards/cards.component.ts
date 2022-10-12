import { MatDialog} from '@angular/material/dialog';
import { Curso } from './../../models/curso';
import { Datos } from '../../data/data';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cursos:Curso[]=Datos.cursos;


  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  inscribir(curso:Curso){
    let dialog= this.dialog.open(CardsComponent,{
      width: '50%',
      height: '50%',
    });
  }



}
