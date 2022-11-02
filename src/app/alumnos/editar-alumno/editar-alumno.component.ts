import { Curso } from './../../models/curso';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { ListaAlumnosService } from './../services/lista-alumnos.service';
import { Alumnos } from './../../models/alumnos';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})


export class EditarAlumnoComponent implements OnInit {

  form!:FormGroup;
  alumno!:Alumnos;
  listaCursos: Array<any>=[];
  cursosActuales$!: Observable<Curso[]>;

  constructor(
    private cursosService: CursosService,
    private alumnosService: ListaAlumnosService,
    private rutas:Router,
    private rutaActivada: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cursosActuales$= this.cursosService.getCursos(),
    this.listaCursos.push(this.cursosActuales$.subscribe((data)=>{
      this.listaCursos=data
    })
    )

    this.rutaActivada.paramMap.subscribe((parametros)=>{
      this.alumno={
        idAlumno: parseInt(parametros.get('idAlumno') as string),
        nombre: (parametros.get('nombre') || ''),
        apellido: (parametros.get('apellido') || ''),
        correo: (parametros.get('correo') || ''),
        cursoActual: JSON.parse(parametros.get('cursoActual') as string)
      }
    })

    this.form= new FormGroup({
      nombre: new FormControl(this.alumno.nombre, [Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      apellido: new FormControl(this.alumno.apellido, [Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
      correo: new FormControl(this.alumno.correo,[Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$'), Validators.required]),
      cursoActual: new FormControl(this.alumno.cursoActual.nombre, [Validators.required
      ])
  })
  }

  editarCurso(){
    const alumno:Alumnos={
        idAlumno: this.alumno.idAlumno,
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        correo: this.form.value.correo,
        cursoActual: this.form.value.cursoActual,
    }

    const cursoListado= this.listaCursos.find(curso=>curso.nombre=== alumno.cursoActual);

    alumno.cursoActual=cursoListado;

    this.alumnosService.editarAlumno(alumno)
    this.rutas.navigate(['alumnos/lista-alumnos'])
  }

  retroceder(){
    this.rutas.navigate(['alumnos/lista-alumnos']);
  }

}
