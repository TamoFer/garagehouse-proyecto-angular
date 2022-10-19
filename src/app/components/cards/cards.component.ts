import { CursosService } from './../../services/cursos.service';
import { InscribirAlumnoComponent } from './../dialogs/inscribir-alumno/inscribir-alumno.component';
import { MatDialog} from '@angular/material/dialog';
import { Curso } from './../../models/curso';
import { Component,OnInit } from '@angular/core';
import { map, Observable, of} from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: `./cards.component.html`,
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  cursos:Curso[]=this.cursosService.obtenerCursos();

  cursos$: Observable<Curso[]>;
  sub: any;
  promises: any;

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog
  ) {
    this.cursos$ = cursosService.getCursosObservable();
    this.promises= cursosService.getCursosPromise();

  }

  ngOnInit(): void {
    of(this.cursos).pipe(
      map((cursos: Curso[]) => cursos.filter((curso:Curso) => curso.profesor === 'Abner'))
    ).subscribe((cursos) => {
      console.log('Usando el of:', cursos);
    });
  }


  inscribir(curso:Curso){
    let dialog= this.dialog.open(InscribirAlumnoComponent,{
      data: {name:curso.nombre,fecha:curso.finicio}
    });
  }

  // buscarXProfesor(event:Event){
  //   const valorObtenido = (event.target as HTMLInputElement).value.toLowerCase();
  //   console.log(valorObtenido);

  //   of(this.cursos).pipe(
  //     map((cursos: Curso[]) => cursos.filter((curso:Curso) => curso.profesor === 'Abner'))
  //   ).subscribe((cursos) => {
  //     console.log('Usando el of:', cursos);
  //   });
  // }

    // this.data.filterPredicate = function(alumno: Alumnos, filtro: string){
    //   return alumno.cursoActual.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    // };
    // this.data.filter = valorObtenido.trim().toLowerCase();

}
