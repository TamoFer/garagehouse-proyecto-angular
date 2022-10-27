import { Alumnos } from './../../models/alumnos';
import { Observable } from 'rxjs/internal/Observable';
import { Curso } from '../../models/curso';
import { Component,OnInit,} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// import { MatDialog } from '@angular/material/dialog';
import { ListaAlumnosService } from '../services/lista-alumnos.service';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { map, of, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  lista!: any;
  suscripcion!: Subscription;
  listaAlumnos$!: Observable<Alumnos[]>;
  columnas: string[] = ['nombre', 'apellido', 'correo', 'cursando', 'actions'];
  data: MatTableDataSource<Alumnos>= new MatTableDataSource<Alumnos>();

  constructor(
    private alumnosService: ListaAlumnosService,
    private ruta: Router
  ) {
  }

  ngOnInit(): void {
    this.listaAlumnos$=this.alumnosService.getAlumnosObservable(),
    this.listaAlumnos$.subscribe(
      (alumnos:Alumnos[])=> this.data.data= alumnos
    ),
    this.suscripcion= this.listaAlumnos$.subscribe((alumnos)=>{
      this.lista=alumnos
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
  }

  buscarXApellido(event:Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    if(valorObtenido==''){
      this.data.data=this.lista
    }else{
      of(this.lista).pipe(
        map((alumnos:Alumnos[]) => alumnos.filter((alumno: Alumnos) => alumno.apellido.toLowerCase() === valorObtenido))
      ).subscribe((alumnos) => {
        this.data.data= alumnos
      });
    }
  }
  buscarXCurso(event:Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    if(valorObtenido===''){
      this.data.data=this.lista
    }else{
      of(this.lista).pipe(
        map((alumnos:Alumnos[]) => alumnos.filter((alumno: Alumnos) => alumno.cursoActual.nombre.toLowerCase() === valorObtenido))
      ).subscribe((alumnos) => {
        this.data.data= alumnos
      });
    }
  }
  addAlumno(){
    this.ruta.navigate(['alumnos/add-alumno'])
  }

}

