import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';
import { Datos } from 'src/app/data/data';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})


export class EditarAlumnoComponent implements OnInit {
  cursos: Curso[]=Datos.cursos;

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
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.editandoAlumno.value);
  }

  close(){
    this.dialogRef.close(this.editandoAlumno.value)
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
