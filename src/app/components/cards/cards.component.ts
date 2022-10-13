import { token, Configuracion } from './../../config';
import { InscribirAlumnoComponent } from './../dialogs/inscribir-alumno/inscribir-alumno.component';
import { MatDialog} from '@angular/material/dialog';
import { Curso } from './../../models/curso';
import { Component,Inject,OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: `./cards.component.html`,
  styleUrls: ['./cards.component.scss']
})



export class CardsComponent implements OnInit {
  cursos!:Curso[];


  constructor(
    @Inject(token) private config:Configuracion,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cursos=this.config.cursos.obtenerCursos();
  }


  inscribir(curso:Curso){
    let dialog= this.dialog.open(InscribirAlumnoComponent,{
      width: '50%',
      height: '50%',
      data: {name:curso.nombre, curso:curso.id}
    });

    // dialog.beforeClosed().subscribe(res => {
    //   console.log(res);
    //   this.dataInicial.push(
    //     {
    //       ...res,
    //       id:this.dataInicial.length+1
    //     }
    //   )
    //   this.ELEMENT_DATA.data = this.dataInicial
    // })

  }






}
