import { Curso } from './../../models/curso';
import { Observable } from 'rxjs/internal/Observable';
import { Alumnos } from './../../models/alumnos';
import { ListaAlumnosService } from './../services/lista-alumnos.service';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/cursos/services/cursos.service';


@Component({
  selector: 'app-dialogs',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.scss']
})

export class AgregarAlumnoComponent implements OnInit {

  cursosActuales$!: Observable<Curso[]>;
  listaCursos:Array<any>=[];
  alumnoNuevo!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cursosService:CursosService,
    private alumnosService:ListaAlumnosService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.cursosActuales$= this.cursosService.getCursos(),
    this.listaCursos.push(this.cursosActuales$.subscribe((data)=>{
      this.listaCursos=data
    })
    )
    this.alumnoNuevo= new FormGroup({
      nombre: new FormControl ('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]) ,
      apellido:new FormControl ('',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      correo: new FormControl('', [Validators.required,Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')]),
      curso: new FormControl('',[Validators.required])
    })
  }


  asociarCurso(){
    const cursoListado= this.listaCursos.find(curso=>curso.nombre.toLocaleLowerCase()===this.alumnoNuevo.value.curso.toLocaleLowerCase());

    return this.alumnoNuevo.value.curso=cursoListado;
  }


  agregarAlumno(){
    const alumno: Alumnos = {
      idAlumno: Math.round(Math.random() * 100),
      nombre: this.alumnoNuevo.value.nombre,
      apellido: this.alumnoNuevo.value.apellido,
      correo: this.alumnoNuevo.value.correo,
      cursoActual: this.asociarCurso()
    };

    this.alumnosService.agregarAlumno(alumno);
    this.route.navigate(['alumnos/lista-alumnos']);
  }

  retroceder(){
    this.route.navigate(['alumnos/lista-alumnos']);
  }



}
