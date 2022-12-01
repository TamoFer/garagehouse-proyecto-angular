import { editarAlumno } from '../../../alumnos/state/alumnos.actions';
import { selectAlumnos } from 'src/app/alumnos/state/alumnos.selectors';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';
import { Alumnos } from 'src/app/models/alumnos';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles-curso.component.html',
  styleUrls: ['./ver-detalles-curso.component.scss']
})
export class VerDetallesComponentCurso implements OnInit {

  data!: MatTableDataSource<Alumnos>;
  columnas: string[] = ['alumno'];
  alumnos$!:Observable<Alumnos[]>;
  listaAlumnos:Array<any> =[]

  constructor(
    private dialogRef: MatDialogRef<VerDetallesComponentCurso>,
    @Inject (MAT_DIALOG_DATA) public curso:Curso,
    private storeAlumnos: Store<Alumnos>
  ) {
    this.alumnos$= this.storeAlumnos.select(selectAlumnos);
    this.data= new MatTableDataSource<Alumnos>(this.alumnosCursando(this.curso))
  }

  ngOnInit(): void {
  }

  alumnosCursando(curso:Curso) {
    this.alumnos$.forEach((alumnos)=>{
      this.listaAlumnos=alumnos.filter(alumno=>alumno.cursoActual.id=== curso.id)
    })
    return this.listaAlumnos
  }

  cerrar(){
    this.dialogRef.close();
  }


}
