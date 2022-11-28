import { map, Observable, Subscription } from 'rxjs';
import { selectCursos} from './../../../cursos/state/cursos.selectors';
import { Curso } from '../../../models/curso';
import { Component,OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Alumnos } from 'src/app/models/alumnos';
import { Store } from '@ngrx/store';
import { MatDialogRef} from '@angular/material/dialog';
import { agregarAlumno } from '../../state/alumnos.actions';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dialogs',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.scss']
})

export class AgregarAlumnoComponent implements OnInit {

  alumnoNuevo!: FormGroup;
  cursos$!:Observable<Curso[]>;
  suscripcionCursos!:Subscription;
  id!:number;
  cursoListado!:Curso;

  constructor(
    private storeAlumnos: Store<Alumnos>,
    private storeCursos: Store<Curso>,
    public dialogRef: MatDialogRef<AgregarAlumnoComponent>

  ) {
    this.cursos$= this.storeCursos.select(selectCursos)

  }

  ngOnInit(): void {

    this.alumnoNuevo= new FormGroup({
      nombre: new FormControl ('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]) ,
      apellido:new FormControl ('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      curso: new FormControl('',[Validators.required])
    })
  }

  ngOnDestroy(): void {
  }

  asociarCurso(){

    this.cursos$.subscribe((cursos)=>{
      cursos.find((curso)=> {
        if (curso.nombre===this.alumnoNuevo.value.curso) {
          this.cursoListado=curso
        }
      }
    )})
    return this.cursoListado
  }

  agregarAlumno(){
    const alumno: Alumnos = {
      idAlumno:this.id,
      nombre: this.alumnoNuevo.value.nombre,
      apellido: this.alumnoNuevo.value.apellido,
      cursoActual: this.asociarCurso()
    };

    Swal.fire({
      toast: true,
      position: "top",
      iconColor: "white",
      customClass: {
        popup: "colored-toast",
      },
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: false,
      icon: "success",
      title: `${alumno.nombre} ${alumno.apellido} agregado`,
    })

    this.storeAlumnos.dispatch(agregarAlumno({alumno}))
    this.dialogRef.close()
  }

  retroceder(){
    this.dialogRef.close()
  }



}
