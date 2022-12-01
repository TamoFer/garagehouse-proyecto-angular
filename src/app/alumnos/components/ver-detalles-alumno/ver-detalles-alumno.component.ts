import { editarAlumno } from '../../state/alumnos.actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/models/alumnos';
import { Curso } from 'src/app/models/curso';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles-alumno.component.html',
  styleUrls: ['./ver-detalles-alumno.component.scss']
})
export class VerDetallesComponentAlumno implements OnInit {

  columnas: string[] = ['curso', 'comision', 'actions'];
  data!: MatTableDataSource<Curso>;
  cursos:Curso[] = [];

  constructor(
    private dialogRef: MatDialogRef<VerDetallesComponentAlumno>,
    @Inject (MAT_DIALOG_DATA) public alumno:Alumnos,
    private storeAlumnos: Store<Alumnos>
  ) {
    this.cursos.push(this.alumno.cursoActual)
    this.data= new MatTableDataSource<Curso>(this.cursos)
  }

  ngOnInit(): void {
  }

  cerrarDetalles(){
    this.dialogRef.close();
  }

  darBaja(){
    const a:Alumnos={
      ...this.alumno,
      cursoActual: {
        id:0,
        comision:'',
        nombre:'',
        profesor:'',
        finicio: new Date(Date()),
        ftermino: new Date(Date()),
        descripcion:'',
        num_horas:0,
        num_clases:0
      }
    }
    this.storeAlumnos.dispatch(editarAlumno({alumno:a}))
    this.cerrarDetalles()
  }
}
