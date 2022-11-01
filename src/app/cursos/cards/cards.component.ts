import { CursosService } from '../services/cursos.service';
import { Curso } from './../../models/curso';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of, Subscription} from 'rxjs';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-cards',
  templateUrl: `./cards.component.html`,
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  cursos$: Observable<Curso[]>;
  cursos!: any;
  suscripcion!: Subscription;
  sesion$!:Observable<Sesion>;
  valorSesion!: any;

  constructor(
    private sesionService: SesionService,
    private cursosService: CursosService,
    private router: Router
  ) {
    this.cursos$ = cursosService.getCursosObservable();
  }

  ngOnInit(): void {
    this.suscripcion= this.cursos$.subscribe((cursos)=>{
      this.cursos=cursos
    })
  }

  ngAfterContentInit(): void {
    this.comprobarSesion()
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
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
    if(valorObtenido===''){
      this.cursos$ = new Observable<Curso[]>((sub) => {
        sub.next(this.cursos)
      });
    }else{
      of(this.cursos).pipe(
        map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.profesor.toLowerCase() === valorObtenido))
      ).subscribe((cursos) => {
        this.cursos$ = new Observable<Curso[]>((sub) => {
          sub.next(cursos)
        });
      });
    }

  }

  buscarXNombre(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    if(valorObtenido===''){
      this.cursos$ = new Observable<Curso[]>((sub) => {
        sub.next(this.cursos)
      });
    }else{
      of(this.cursos).pipe(
        map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.nombre.toLowerCase() === valorObtenido))
      ).subscribe((cursos) => {
        this.cursos$ = new Observable<Curso[]>((sub) => {
          sub.next(cursos)
        });
      });
    }
  }

  editarDatos(curso:Curso){
    this.router.navigate(['cursos/editar-curso',curso])
  }

  eliminarCurso(id:number){
    this.cursosService.eliminarCurso(id)
  }

}
