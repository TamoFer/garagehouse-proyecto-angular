import { selectCursos } from 'src/app/cursos/state/cursos.selectors';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of, Subscription} from 'rxjs';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-cards',
  templateUrl: `./cards.component.html`,
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  sesion$!:Observable<Sesion>;
  valorSesion!: any;

  constructor(
    private store: Store<AppState>,
    private sesionService: SesionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.store.select(selectCursos);
  }


  ngAfterContentInit(): void {
    this.comprobarSesion()
  }

  inscripcion(){
    alert('Funcion en desarrollo, disculpe las molestias')
  }

  comprobarSesion(){
    this.sesion$=this.sesionService.obtenerSesion()
    this.sesion$.subscribe((dato:Sesion)=>{
      if(dato.sesionActiva){
        this.valorSesion=dato
      }
    })
  }

  agregarCurso(){
    this.router.navigate(['cursos/agregar-curso'])
  }

  buscarXProfesor(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    // if(valorObtenido===''){
    //   this.cursos$ = new Observable<Curso[]>((sub) => {
    //     sub.next(this.cursos)
    //   });
    // }else{
    //   of(this.cursos).pipe(
    //     map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.profesor.toLowerCase() === valorObtenido))
    //   ).subscribe((cursos) => {
    //     this.cursos$ = new Observable<Curso[]>((sub) => {
    //       sub.next(cursos)
    //     });
    //   });
    // }

  }

  buscarXNombre(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    // if(valorObtenido===''){
    //   this.cursos$ = new Observable<Curso[]>((sub) => {
    //     sub.next(this.cursos)
    //   });
    // }else{
    //   of(this.cursos).pipe(
    //     map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.nombre.toLowerCase() === valorObtenido))
    //   ).subscribe((cursos) => {
    //     this.cursos$ = new Observable<Curso[]>((sub) => {
    //       sub.next(cursos)
    //     });
    //   });
    // }
  }

  editarDatos(curso:Curso){
    this.router.navigate(['cursos/editar-curso',curso])
  }

  eliminarCurso(id:number){
    // this.store.dispatch(eliminarCurso({id}))
    // this.cursosService.eliminarCurso(id)
  }

  refresh(){
    // this.cursos$ = this.cursosService.getCursos();
    // this.suscripcion= this.cursos$.subscribe((cursos)=>{
    //   this.cursos=cursos
    // })
  }
}
