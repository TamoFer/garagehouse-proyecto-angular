import { Alumnos } from './../../models/alumnos';
import { Observable } from 'rxjs/internal/Observable';
import { Curso } from '../../models/curso';
import { Component,OnInit,} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// import { MatDialog } from '@angular/material/dialog';
import { ListaAlumnosService } from '../services/lista-alumnos.service';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  cursos$!:Observable<Curso[]>;
  listaAlumnos$!: Observable<Alumnos[]>;
  columnas: string[] = ['nombre', 'correo', 'cursando', 'actions'];
  data: MatTableDataSource<Alumnos>= new MatTableDataSource<Alumnos>();

  constructor(
    // private dialog: MatDialog
    private cursosService: CursosService,
    private alumnosService: ListaAlumnosService
  ) {
  }

  ngOnInit(): void {
    this.cursos$= this.cursosService.getCursosObservable(),
    this.listaAlumnos$=this.alumnosService.getAlumnosObservable(),
    this.listaAlumnos$.subscribe(
      (alumnos:Alumnos[])=> this.data.data= alumnos
    )
  }


  // agregarAlumno(){
  //     let dialog = this.dialog.open(AgregarAlumnoComponent, {
  //     });
  //     dialog.beforeClosed().subscribe(res => {
  //       if (res.nombre!=''){
  //         this.listaAlumnos.push(
  //           {
  //             ...res,
  //             idAlumno:this.listaAlumnos.length+1
  //           }
  //         )
  //         this.data.data = this.listaAlumnos
  //       }else{
  //         this.data.data = this.listaAlumnos
  //       }
  //     })
  // }

  // editAlumno(alumno:Alumnos){
  //   let dialog = this.dialog.open(EditarAlumnoComponent, {
  //     data: {name:alumno.nombre, curso:alumno.cursoActual}
  //   });
  //   dialog.beforeClosed().subscribe(res => {
  //       res.nombre==='' && !res.nombre?(res.nombre=alumno.nombre):(alumno.nombre=res.nombre);
  //       res.apellido===''&& !res.apellido?(res.apellido=alumno.apellido):(alumno.apellido=res.apellido);
  //       res.correo===''&& !res.correo?(res.correo=alumno.correo):(alumno.correo=res.correo);
  //       res.cursoActual ==='' || res.cursoActual===undefined? (res.cursoActual=alumno.cursoActual) : (alumno.cursoActual=res.cursoActual);
  //       res.idAlumno=alumno.idAlumno;
  //       this.data.data = this.listaAlumnos;
  //     });
  // }

  // deleteAlumno(id:number){
  //   let indice = this.listaAlumnos.findIndex(alumno => alumno.idAlumno == id)
  //   this.listaAlumnos.splice(indice, 1)
  //   this.data.data = this.listaAlumnos
  // }

  // buscarXNombre(event: Event){
  //   const valorObtenido = (event.target as HTMLInputElement).value;
  //   this.data.filterPredicate = function(alumno: Alumnos, filtro: string){
  //     return alumno.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
  //   };
  //   this.data.filter = valorObtenido.trim().toLowerCase();
  // }

  // buscarXCurso(event: Event){
  //   const valorObtenido = (event.target as HTMLInputElement).value;
  //   this.data.filterPredicate = function(alumno: Alumnos, filtro: string){
  //     return alumno.cursoActual.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
  //   };
  //   this.data.filter = valorObtenido.trim().toLowerCase();
  // }

}

