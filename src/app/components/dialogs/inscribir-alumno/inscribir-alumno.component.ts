import { Alumnos } from './../../../models/alumnos';
import { Curso } from './../../../models/curso';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component,Inject,OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Datos } from 'src/app/data/data';
import { DialogData } from 'src/app/models/dialogs';

@Component({
  selector: 'app-inscribir-alumno',
  templateUrl: './inscribir-alumno.component.html',
  styleUrls: ['./inscribir-alumno.component.scss']
})


export class InscribirAlumnoComponent implements OnInit {
  alumnos:Alumnos[]=Datos.listaAlumnos;
  cursos:Curso[]=Datos.cursos;



  inscripcion: FormGroup = this.fb.group(
    {
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      correo:['',Validators.required],
      cursoActual:['',Validators.required],
    }
  )

  constructor(
    public dialogRef: MatDialogRef<InscribirAlumnoComponent>,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {}

  close(){
    this.dialogRef.close()
  }

  save() {
    this.asociarCurso();
    this.dialogRef.close(this.alumnos)
  }

  asociarCurso(){
    const cursoListado= this.cursos.find(curso=>curso.id===this.data.curso);
    return this.inscripcion.value.cursoActual=cursoListado;
  }


}
