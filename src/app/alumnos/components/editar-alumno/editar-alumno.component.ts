import { cargarCursos } from './../../../cursos/state/cursos.actions';
import { editarAlumno} from './../../state/alumnos.actions';
import { Curso } from '../../../models/curso';
import { Alumnos } from '../../../models/alumnos';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectCursos } from 'src/app/cursos/state/cursos.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})


export class EditarAlumnoComponent implements OnInit {

  form!: FormGroup;
  cursos$!:Observable<Curso[]>;
  cursoListado!:Curso;


  constructor(
    public dialogRef: MatDialogRef<EditarAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public alumno: Alumnos,
    private storeCursos: Store<Curso>,
    private storeAlumnos: Store<Alumnos>,
    private snackBar: MatSnackBar

  ) {
    this.storeCursos.dispatch(cargarCursos())
    this.form = new FormGroup({
      nombre: new FormControl(this.alumno.nombre, [Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      apellido: new FormControl(this.alumno.apellido, [Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      cursoActual: new FormControl(this.alumno.cursoActual?.nombre),
    })
  }

  ngOnInit(): void {
    this.cursos$= this.storeCursos.select(selectCursos)
  }


  editarAlumno() {

    const alumnoEditado: Alumnos = {
      idAlumno: this.alumno.idAlumno,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      cursoActual: this.asociarCurso(),
    }

    this.storeAlumnos.dispatch(editarAlumno({ alumno: alumnoEditado }))
    this.snackBar.open(`Editado con exito`, '', {
      duration: 1500,
      panelClass: ['mat-toolbar', 'mat-primary'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.dialogRef.close();
  }

  asociarCurso() {
    this.cursos$.forEach((cursos)=>{
      this.cursoListado= cursos.filter(curso=>curso.nombre === this.form.value.cursoActual)[0]
    })
    return this.cursoListado
  }

  retroceder() {
    this.dialogRef.close();
  }

}
