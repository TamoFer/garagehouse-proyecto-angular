import { Configuracion, token } from './../../../config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})


export class EditarAlumnoComponent implements OnInit {
  cursos!: Curso[];

  editandoAlumno: FormGroup = this.fb.group(
    {
      idAlumno:[''],
      nombre:[''],
      apellido:[''],
      correo:[''],
      cursoActual:['']
    }
  )


  constructor(
    public dialogRef: MatDialogRef<EditarAlumnoComponent>,
    private fb: FormBuilder,
    @Inject(token) private config:Configuracion
  ) { }

  ngOnInit(): void {
    this.cursos=this.config.cursos.obtenerCursos();
  }

  close(){
    this.dialogRef.close()
  }

  save() {
    this.asociarCurso();
    this.dialogRef.close(this.editandoAlumno.value)
  }

  asociarCurso(){
    const cursoListado= this.cursos.find(curso=>curso.nombre.toLocaleLowerCase()===this.editandoAlumno.value.cursoActual.toLocaleLowerCase());

    return this.editandoAlumno.value.cursoActual=cursoListado;
  }
}
