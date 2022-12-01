import { editarAlumno } from '../../state/alumnos.actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/models/alumnos';
import { Curso } from 'src/app/models/curso';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private storeAlumnos: Store<Alumnos>,
    private snackBar: MatSnackBar
  ) {
    if (this.alumno.cursoActual.nombre!='') {
      this.cursos.push(this.alumno.cursoActual)
      this.data= new MatTableDataSource<Curso>(this.cursos)
    }

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

    Swal.fire({
      title: `¿Quieres darte de baja del curso ${this.alumno.cursoActual.nombre}?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.storeAlumnos.dispatch(editarAlumno({alumno:a}))
        this.alumno = a
        this.snackBar.open(`Dado de baja`, '', {
          duration: 1500,
          panelClass: ['mat-toolbar', 'mat-warn'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    })
  }
}
