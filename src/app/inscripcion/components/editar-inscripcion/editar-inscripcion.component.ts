import { cursosCargados } from './../../../cursos/state/cursos.actions';
import { selectCursos } from './../../../cursos/state/cursos.selectors';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { Inscripcion } from 'src/app/models/inscripcion';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { Alumnos } from 'src/app/models/alumnos';

@Component({
  selector: 'app-editar-inscripcion',
  templateUrl: './editar-inscripcion.component.html',
  styleUrls: ['./editar-inscripcion.component.scss']
})
export class EditarInscripcionComponent implements OnInit {

  formulario!: FormGroup;
  suscripcionCursos!: Subscription;
  cursos$!:Observable<Curso[]>;
  alumnos$!:Observable<Alumnos[]>

  constructor(
    private dialogRef: MatDialogRef<EditarInscripcionComponent>,
    private cursosService: CursosService,
    private storeCursos: Store<Curso>,
    private storeAlumnos: Store<Alumnos>,
    private storeInscripciones: Store<Inscripcion>,
    @Inject(MAT_DIALOG_DATA) public inscripcion: Inscripcion
  ) {
    this.formulario = new FormGroup({
      id_curso: new FormControl(this.inscripcion.id_curso),
      id_alumno: new FormControl(this.inscripcion.id_alumno),
      id_usuario: new FormControl(this.inscripcion.id_usuario),
      fechaInscripcion: new FormControl(new Date(this.inscripcion.fechaInscripcion).toLocaleDateString()),
    })
  }

  ngOnInit(): void {
    this.suscripcionCursos = this.cursosService.obtenerCursos().subscribe({
      next: (cursos: Curso[]) => {
        this.storeCursos.dispatch(cursosCargados({ cursos }))
      }
    });

    this.cursos$=this.storeCursos.select(selectCursos)

  }

  ngOnDestroy(): void {
    this.suscripcionCursos.unsubscribe();
  }

  // editarInscripcion() {
  //   const i: Inscripcion = {
  //     id: this.inscripcion.id,
  //     curso: this.asociarCurso(),
  //     alumno: this.inscripcion.alumno,
  //     fechaInscripcion: this.formulario.get('fechaInscripcion')?.touched ? this.formulario.value.fechaInscripcion : this.inscripcion.fechaInscripcion
  //   }
  //   this.storeInscripciones.dispatch(editarInscripcion({ inscripcion: i }))
  //   this.dialogRef.close()
  // }

  retroceder() {
    this.dialogRef.close()
  }


}
