import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificacion-alumno',
  templateUrl: './modificacion-alumno.component.html',
  styleUrls: ['./modificacion-alumno.component.sass']
})
export class ModificacionAlumnoComponent implements OnInit {
  // cursos!: Curso[];

  // editandoAlumno: FormGroup = this.fb.group(
  //   {
  //     idAlumno:[''],
  //     nombre:[''],
  //     apellido:[''],
  //     correo:[''],
  //     cursoActual:['']
  //   }
  // )


  // constructor(
  //   public dialogRef: MatDialogRef<EditarAlumnoComponent>,
  //   private fb: FormBuilder,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData,
  //   @Inject(token) private config:Configuracion
  // ) { }

  // ngOnInit(): void {
  //   this.cursos=this.config.cursos.obtenerCursos();
  // }

  // close(){
  //   this.dialogRef.close(this.editandoAlumno.value)
  // }

  // save() {
  //   this.asociarCurso();
  //   this.dialogRef.close(this.editandoAlumno.value)
  // }

  // asociarCurso(){
  //   const cursoListado= this.cursos.find(curso=>curso.nombre.toLocaleLowerCase()===this.editandoAlumno.value.cursoActual.toLocaleLowerCase());

  //   return this.editandoAlumno.value.cursoActual=cursoListado;
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
