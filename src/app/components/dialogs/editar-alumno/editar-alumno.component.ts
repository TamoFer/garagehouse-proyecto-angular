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
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      correo:['',Validators.required],
      cursoActual:['',Validators.required]
    }
  )


  constructor(
    public dialogRef: MatDialogRef<EditarAlumnoComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  close(){}
  save(){}

}
