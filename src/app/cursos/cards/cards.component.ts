import { CursosService } from '../services/cursos.service';
import { Curso } from './../../models/curso';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: `./cards.component.html`,
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  cursos$: Observable<Curso[]>;
  cursos!: any

  constructor(
    private cursosService: CursosService,
    private router: Router
  ) {
    this.cursos$ = cursosService.getCursosObservable();
  }

  ngOnInit(): void {
    this.cursos$.subscribe((cursos)=>{
      this.cursos=cursos
    })
  }


  // inscribir(curso: Curso) {
  //   let dialog = this.dialog.open(InscribirAlumnoComponent, {
  //     data: { name: curso.nombre, fecha: curso.finicio }
  //   });
  // }

  agregarAlumno(){
    this.router.navigate(['cursos/agregar-curso'])
  }

  buscarXProfesor(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    of(this.cursos).pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.profesor.toLowerCase() === valorObtenido))
    ).subscribe((cursos) => {
      if(cursos.length>0)
        console.log(cursos);
      else{
        console.log('Ingresa nombre y apellido del profesor buscado');

      }
    });
  }

  buscarXNombre(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    of(this.cursos).pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.profesor.toLowerCase() === valorObtenido))
    ).subscribe((cursos) => {
      if(cursos.length>0)
        console.log(cursos);
      else{
        console.log('Ingresa nombre y apellido del profesor buscado');

      }
    });
  }

}
