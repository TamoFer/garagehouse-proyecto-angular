import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  ngOnInit(): void {
  }

  // cursos!:Curso[];
  // cursos$: Observable<Curso[]>;
  // promises: any;

  // constructor(
  //   private cursosService: CursosService,
  //   private dialog: MatDialog
  // ) {
  //   this.cursos$ = cursosService.getCursosObservable();
  //   this.promises = cursosService.getCursosPromise();
  //   this.cursos= cursosService.obtenerCursos();
  // }

  // ngOnInit(): void {
  // }


  // inscribir(curso: Curso) {
  //   let dialog = this.dialog.open(InscribirAlumnoComponent, {
  //     data: { name: curso.nombre, fecha: curso.finicio }
  //   });
  // }

  // buscarXProfesor(event: Event) {
  //   const valorObtenido = (event.target as HTMLInputElement).value;
  //   of(this.cursos).pipe(
  //     map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.profesor.toLowerCase() === valorObtenido))
  //   ).subscribe((cursos) => {
  //     if(cursos.length>0)
  //       console.log(cursos);
  //     else{
  //       console.log('Ingresa nombre y apellido del profesor buscado');

  //     }
  //   });
  // }


}
