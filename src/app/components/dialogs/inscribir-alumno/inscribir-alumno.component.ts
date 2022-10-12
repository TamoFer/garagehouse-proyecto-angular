import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inscribir-alumno',
  templateUrl: './inscribir-alumno.component.html',
  styleUrls: ['./inscribir-alumno.component.scss']
})
export class InscribirAlumnoComponent implements OnInit {


  AlumnoNuevo: FormGroup = this.fb.group(
    {
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      correo:['',Validators.required],
      cursoActual:['',Validators.required],
    }
  )
  constructor(
    public dialogRef: MatDialogRef<InscribirAlumnoComponent>,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close(this.AlumnoNuevo.value)
  }

  save() {
    // this.asociarCurso();
    this.dialogRef.close(this.AlumnoNuevo.value)
  }



}
