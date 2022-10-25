import { FormGroup, FormBuilder} from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';
import { DialogData } from 'src/app/models/dialogs';

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
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
