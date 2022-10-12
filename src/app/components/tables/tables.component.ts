import { DialogsComponent } from './../dialogs/dialogs.component';
import { Curso } from './../../models/curso';
import { Alumnos } from './../../models/alumnos';
import { Component,EventEmitter,OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  curso!:Curso;

  listaAlumnos: Alumnos[]=[
    {idAlumno: 1,
    nombre: 'Ijak',
    apellido:'Perez',
    correo:'ijak@perez.com',
    cursoActual:this.curso={id:1,nombre:'Desarrollo Web',profesor:'Matias Cordoba', finicio:new Date(2022,3,15),ftermino:new Date(2022,5,15),descripcion:'Curso incial de programacion web donde veras HTML 5 y CSS3 entre demas cosas',disponibilidad:true}},
    {idAlumno: 2,
      nombre: 'Abner',
      apellido:'Gonzales',
      correo:'abner@gonzales.com',
      cursoActual:this.curso={id: 2, nombre:'Javacript', profesor: 'Anthony Lopez', finicio: new Date(2022,5,29), ftermino: new Date(2022,7,10), descripcion: 'Curso donde aprenderas a potenciar tus conocimientos de maquetacion con Javascript', disponibilidad:true}}
  ]

  columnas: string[] = ['nombre', 'correo', 'cursando', 'actions'];
  data: MatTableDataSource<Alumnos> = new MatTableDataSource<Alumnos>(this.listaAlumnos);

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  agregarAlumno(){
      let dialog = this.dialog.open(DialogsComponent, {
        width: '50%',
        height: '50%',
      });
      dialog.beforeClosed().subscribe(res => {
        this.listaAlumnos.push(
          {
            ...res,
            idAlumno:this.listaAlumnos.length+1
          }
        )
        this.data.data = this.listaAlumnos
      })

  }

  editAlumno(id:number){}

  deleteAlumno(id:number){
    let indice = this.listaAlumnos.findIndex(alumno => alumno.idAlumno == id)
    this.listaAlumnos.splice(indice, 1)
    this.data.data = this.listaAlumnos
  }

  buscarXNombre(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.data.filterPredicate = function(alumno: Alumnos, filtro: string){
      return alumno.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.data.filter = valorObtenido.trim().toLowerCase();
  }

  buscarXCurso(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.data.filterPredicate = function(alumno: Alumnos, filtro: string){
      return alumno.cursoActual.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.data.filter = valorObtenido.trim().toLowerCase();
  }

}
function openDialog() {
  throw new Error('Function not implemented.');
}

