import { editarAlumno } from '../../../alumnos/state/alumnos.actions';
import { selectAlumnos } from 'src/app/alumnos/state/alumnos.selectors';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';
import { Alumnos } from 'src/app/models/alumnos';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles-curso.component.html',
  styleUrls: ['./ver-detalles-curso.component.scss']
})
export class VerDetallesComponentCurso implements OnInit {

  data!: MatTableDataSource<Alumnos>;
  columnas: string[] = ['alumno', 'actions'];
  alumnos$!: Observable<Alumnos[]>;
  listaAlumnos: Array<any> = []

  constructor(
    private dialogRef: MatDialogRef<VerDetallesComponentCurso>,
    @Inject(MAT_DIALOG_DATA) public curso: Curso,
    private storeAlumnos: Store<Alumnos>,
    private snackBar: MatSnackBar
  ) {
    this.alumnos$ = this.storeAlumnos.select(selectAlumnos);
    if (this.alumnosCursando.length != 0) {
      this.data = new MatTableDataSource<Alumnos>(this.alumnosCursando(this.curso))
    }
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.alumnos$ = this.storeAlumnos.select(selectAlumnos);
    this.data = new MatTableDataSource<Alumnos>(this.alumnosCursando(this.curso))
  }

  alumnosCursando(curso: Curso) {
    this.alumnos$.forEach((alumnos) => {
      this.listaAlumnos = alumnos.filter(alumno => alumno.cursoActual.id === curso.id)
    })
    return this.listaAlumnos
  }

  cerrar() {
    this.dialogRef.close();
  }

  darBaja(alumn: Alumnos) {
    const a:Alumnos={
      ...alumn,
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
      title: `¿Quieres dar de baja a ${alumn.nombre} del curso ${alumn.cursoActual.nombre}?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Dar baja',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.storeAlumnos.dispatch(editarAlumno({alumno:a}))
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
