import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { editarCurso } from '../../state/cursos.actions';
import { ListaAlumnosService } from 'src/app/alumnos/services/lista-alumnos.service';
import { Alumnos } from 'src/app/models/alumnos';
import { Observable, Subscription } from 'rxjs';
import { alumnosCargados } from 'src/app/alumnos/state/alumnos.actions';
import { selectAlumnos } from 'src/app/alumnos/state/alumnos.selectors';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.scss']
})
export class EditarCursoComponent implements OnInit {

  form!:FormGroup;
  alumnos$!:Observable<Alumnos[]>
  suscripcionAlumnos!:Subscription;

  constructor(
    public dialogRef: MatDialogRef<EditarCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public curso:Curso,
    private storeCursos: Store<Curso>,
    private storeAlumnos: Store<Alumnos>

  ) { }

  ngOnInit(): void {
    this.alumnos$=this.storeAlumnos.select(selectAlumnos)

    this.form= new FormGroup({
        nombre: new FormControl(this.curso.nombre, [Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
        profe: new FormControl(this.curso.profesor, [Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
        inicio: new FormControl(this.curso.finicio),
        fin: new FormControl(this.curso.ftermino),
        descripcion: new FormControl(this.curso.descripcion, [Validators.minLength(10), Validators.maxLength(25)]),
        comision: new FormControl(this.curso.comision),
        num_horas: new FormControl(this.curso.num_horas),
        num_clases: new FormControl(this.curso.num_clases)
    })
  }

  editarCurso(){

    const cursoEditado:Curso = {
        id: this.curso.id,
        nombre: this.form.value.nombre,
        profesor: this.form.value.profe,
        finicio: this.form.value.inicio,
        ftermino: this.form.value.fin,
        descripcion: this.form.value.descripcion,
        comision: this.form.value.comision,
        num_horas: this.form.value.num_horas,
        num_clases: this.form.value.num_clases
    }

    this.storeCursos.dispatch(editarCurso({curso:cursoEditado}))
    this.dialogRef.close();

  }

  retroceder(){
    this.dialogRef.close();

  }
}
