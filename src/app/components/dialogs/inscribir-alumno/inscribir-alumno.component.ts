import { Configuracion, token } from './../../../config';
import { Alumnos } from './../../../models/alumnos';
import { Curso } from './../../../models/curso';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component,Inject,OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialogs';

@Component({
  selector: 'app-inscribir-alumno',
  templateUrl: './inscribir-alumno.component.html',
  styleUrls: ['./inscribir-alumno.component.scss']
})


export class InscribirAlumnoComponent implements OnInit {
  alumnos!:Alumnos[];
  cursos!:Curso[];

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    @Inject(token) private config: Configuracion,
  ) { }

  ngOnInit(): void {
    this.cursos=this.config.cursos.obtenerCursos();
    this.alumnos=this.config.alumnos.obtenerListaAlumnos();
  }

  close(){
    this.dialogRef.close()
  }

  save() {
    this.asociarCurso();
    this.config.alumnos.agregarAlumnoNuevo(this.inscripcion.value);
    this.dialogRef.close();
  }

  asociarCurso(){
    const cursoListado= this.cursos.find(curso=>curso.id===this.data.curso);
    return this.inscripcion.value.cursoActual=cursoListado;
  }


}
