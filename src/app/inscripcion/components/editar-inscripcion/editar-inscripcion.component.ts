import { cursosCargados } from './../../../cursos/state/cursos.actions';
import { selectCursos } from './../../../cursos/state/cursos.selectors';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { Inscripcion } from 'src/app/models/inscripcion';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { editarInscripcion } from '../../state/inscripcion.actions';

@Component({
  selector: 'app-editar-inscripcion',
  templateUrl: './editar-inscripcion.component.html',
  styleUrls: ['./editar-inscripcion.component.scss']
})
export class EditarInscripcionComponent implements OnInit {

  formulario!: FormGroup;
  suscripcionCursos!: Subscription;
  cursos: Array<any> = [];

  constructor(
    private dialogRef: MatDialogRef<EditarInscripcionComponent>,
    private cursosService: CursosService,
    private storeCursos: Store<Curso>,
    private storeInscripciones: Store<Inscripcion>,
    @Inject(MAT_DIALOG_DATA) public inscripcion: Inscripcion
  ) {
    this.formulario = new FormGroup({
      curso: new FormControl(this.inscripcion.curso.nombre),
      alumno: new FormControl(this.inscripcion.alumno?.nombre + ' ' + this.inscripcion.alumno?.apellido),
      fechaInscripcion: new FormControl(new Date(this.inscripcion.fechaInscripcion).toLocaleDateString()),
    })
  }

  ngOnInit(): void {
    this.suscripcionCursos = this.cursosService.obtenerCursos().subscribe({
      next: (cursos: Curso[]) => {
        this.storeCursos.dispatch(cursosCargados({ cursos }))
      }
    });

    this.cursos.push(this.storeCursos.select(selectCursos).subscribe((cursos) => { this.cursos = cursos }));

  }

  ngOnDestroy(): void {
    this.suscripcionCursos.unsubscribe();
  }

  asociarCurso() {
    const cursoListado = this.cursos.find(curso => curso.nombre === this.formulario.value.curso);
    return cursoListado;
  }

  editarInscripcion() {
    const i: Inscripcion = {
      id: this.inscripcion.id,
      curso: this.asociarCurso(),
      alumno: this.inscripcion.alumno,
      fechaInscripcion: this.formulario.get('fechaInscripcion')?.touched ? this.formulario.value.fechaInscripcion : this.inscripcion.fechaInscripcion
    }
    this.storeInscripciones.dispatch(editarInscripcion({ inscripcion: i }))
    this.dialogRef.close()
  }

  retroceder() {
    this.dialogRef.close()
  }


}
