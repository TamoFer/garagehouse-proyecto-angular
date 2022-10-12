import { Datos } from '../../../data/data';
import { Curso } from '../../../models/curso';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogs',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.scss']
})

export class AgregarAlumnoComponent implements OnInit {
  cursos: Curso[]=Datos.cursos;

  AlumnoNuevo: FormGroup = this.fb.group(
    {
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      correo:['',Validators.required],
      cursoActual:['',Validators.required],
    }
  )

  constructor(
    public dialogRef: MatDialogRef<AgregarAlumnoComponent>,
    private fb: FormBuilder

  ) {
  }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close(this.AlumnoNuevo.value)
  }

  save() {
    this.asociarCurso();
    this.dialogRef.close(this.AlumnoNuevo.value)
  }

  asociarCurso(){
    const cursoListado= this.cursos.find(curso=>curso.nombre.toLocaleLowerCase()===this.AlumnoNuevo.value.cursoActual.toLocaleLowerCase());

    return this.AlumnoNuevo.value.cursoActual=cursoListado;
  }

}
