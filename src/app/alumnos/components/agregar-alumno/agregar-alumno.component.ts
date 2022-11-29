import { map, Observable, Subscription } from 'rxjs';
import { selectCursos} from './../../../cursos/state/cursos.selectors';
import { Curso } from '../../../models/curso';
import { Component,OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Alumnos } from 'src/app/models/alumnos';
import { Store } from '@ngrx/store';
import { MatDialogRef} from '@angular/material/dialog';
import { agregarAlumno } from '../../state/alumnos.actions';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dialogs',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.scss']
})

export class AgregarAlumnoComponent implements OnInit {

  alumnoNuevo!: FormGroup;
  cursos$!:Observable<Curso[]>;
  suscripcionCursos!:Subscription;
  id!:number;
  cursoListado!:Curso;

  constructor(
    private storeAlumnos: Store<Alumnos>,
    private storeCursos: Store<Curso>,
    private dialogRef: MatDialogRef<AgregarAlumnoComponent>,
    private snackBar: MatSnackBar

  ) {
    this.cursos$= this.storeCursos.select(selectCursos)

  }

  ngOnInit(): void {

    this.alumnoNuevo= new FormGroup({
      nombre: new FormControl ('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]) ,
      apellido:new FormControl ('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      curso: new FormControl('',[Validators.required])
    })
  }

  ngOnDestroy(): void {
  }

  asociarCurso(){

    this.cursos$.subscribe((cursos)=>{
      cursos.find((curso)=> {
        if (curso.nombre===this.alumnoNuevo.value.curso) {
          this.cursoListado=curso
        }
      }
    )})
    return this.cursoListado
  }

  agregarAlumno(){
    const alumno: Alumnos = {
      idAlumno:this.id,
      nombre: this.alumnoNuevo.value.nombre,
      apellido: this.alumnoNuevo.value.apellido,
      cursoActual: this.asociarCurso()
    };

    this.storeAlumnos.dispatch(agregarAlumno({alumno}))
    this.snackBar.open(`${alumno.nombre} ${alumno.apellido} agregado `, '', {
      duration: 1500,
      panelClass: ['mat-toolbar', 'mat-accent'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.dialogRef.close()
  }

  retroceder(){
    this.dialogRef.close()
  }



}
