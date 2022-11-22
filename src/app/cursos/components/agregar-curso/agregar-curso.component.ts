import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { agregarCurso } from '../../state/cursos.actions';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.scss']
})
export class AgregarCursoComponent implements OnInit {

  cursoNuevo!: FormGroup;

  constructor(
    private storeCursos: Store<Curso>,
    public dialogRef: MatDialogRef<AgregarCursoComponent>
  ) { }

  ngOnInit(): void {
    this.cursoNuevo= new FormGroup({
      nombre: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      profe: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      inicio: new FormControl('',[Validators.required]),
      fin: new FormControl('',[Validators.required]),
      descripcion: new FormControl('',[Validators.required,Validators.minLength(10), Validators.maxLength(50)]),
      disponibilidad: new FormControl(false)
    })
  }

  agregarCurso(){
    const curso: Curso = {
      id: Math.round(Math.random() * 1000),
      nombre: this.cursoNuevo.value.nombre,
      profesor: this.cursoNuevo.value.profe,
      finicio: this.cursoNuevo.value.inicio,
      ftermino: this.cursoNuevo.value.fin,
      descripcion: this.cursoNuevo.value.descripcion,
      disponibilidad: this.cursoNuevo.value.disponibilidad
    };
    this.storeCursos.dispatch(agregarCurso({curso}))
    this.dialogRef.close();

  }

  retroceder(){
    this.dialogRef.close();
  }

}
