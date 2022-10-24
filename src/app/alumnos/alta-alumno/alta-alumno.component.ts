import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.sass']
})
export class AltaAlumnoComponent implements OnInit {
  // cursos!: Curso[];

  // AlumnoNuevo: FormGroup = this.fb.group(
  //   {
  //     nombre:['',Validators.required],
  //     apellido:['',Validators.required],
  //     correo:['',Validators.required],
  //     cursoActual:['',Validators.required],
  //   }
  // )

  // constructor(
  //   public dialogRef: MatDialogRef<AgregarAlumnoComponent>,
  //   private fb: FormBuilder,
  //   @Inject(token) private config:Configuracion

  // ) {
  // }

  // ngOnInit(): void {
  //   this.cursos=this.config.cursos.obtenerCursos();
  // }

  // close(){
  //   this.dialogRef.close(this.AlumnoNuevo.value)
  // }

  // save(): void {
  //   this.asociarCurso();
  //   this.dialogRef.close(this.AlumnoNuevo.value)
  // }

  // asociarCurso(){
  //   const cursoListado= this.cursos.find(curso=>curso.nombre.toLocaleLowerCase()===this.AlumnoNuevo.value.cursoActual.toLocaleLowerCase());

  //   return this.AlumnoNuevo.value.cursoActual=cursoListado;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
