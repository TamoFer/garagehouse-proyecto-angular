import { selectAlumnos } from './../../state/alumnos.selectors';
import { alumnosCargados, cargarAlumnos } from './../../state/alumnos.actions';
import { cursosCargados } from './../../../cursos/state/cursos.actions';
import { Subscription } from 'rxjs';
import { selectCursos, selectCursosCargando, selectCursosState } from './../../../cursos/state/cursos.selectors';
import { Curso } from '../../../models/curso';
import { Component,OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Alumnos } from 'src/app/models/alumnos';
import { Store } from '@ngrx/store';
import { MatDialogRef} from '@angular/material/dialog';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { agregarAlumno } from '../../state/alumnos.actions';


@Component({
  selector: 'app-dialogs',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.scss']
})

export class AgregarAlumnoComponent implements OnInit {

  alumnoNuevo!: FormGroup;
  cursos: Array<any>=[];
  suscripcionCursos!:Subscription;
  id!:number;

  constructor(
    private storeAlumnos: Store<Alumnos>,
    private cursosService: CursosService,
    private storeCursos: Store<Curso>,
    public dialogRef: MatDialogRef<AgregarAlumnoComponent>
  ) {
    this.storeAlumnos.select(selectAlumnos).subscribe((datos)=>
    this.id= datos.length + 1);

    this.cursos.push(this.storeCursos.select(selectCursos).subscribe((cursos)=>{this.cursos=cursos}));

  }

  ngOnInit(): void {
    this.suscripcionCursos= this.cursosService.obtenerCursos().subscribe({
      next: (cursos:Curso[])=>{
        this.storeCursos.dispatch(cursosCargados({cursos}))
      }
    })

    this.alumnoNuevo= new FormGroup({
      nombre: new FormControl ('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]) ,
      apellido:new FormControl ('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      correo: new FormControl('', [Validators.required,Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')]),
      curso: new FormControl('',[Validators.required])
    })

  }

  ngOnDestroy(): void {
    this.suscripcionCursos.unsubscribe();
  }

  asociarCurso(){
    const cursoListado= this.cursos.find(curso=> curso.nombre === this.alumnoNuevo.value.curso);
    return this.alumnoNuevo.value.curso=cursoListado;
  }

  agregarAlumno(){
    const alumno: Alumnos = {
      idAlumno: this.id,
      nombre: this.alumnoNuevo.value.nombre,
      apellido: this.alumnoNuevo.value.apellido,
      correo: this.alumnoNuevo.value.correo,
      cursoActual: this.asociarCurso()
    };
    this.storeAlumnos.dispatch(agregarAlumno({alumno}))
    this.dialogRef.close()
  }

  retroceder(){
    this.dialogRef.close()
  }



}
