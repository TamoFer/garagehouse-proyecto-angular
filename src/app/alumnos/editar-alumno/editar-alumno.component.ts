import { Curso } from './../../models/curso';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { ListaAlumnosService } from './../services/lista-alumnos.service';
import { Alumnos } from './../../models/alumnos';
import { FormGroup, FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})


export class EditarAlumnoComponent implements OnInit {

  form!:FormGroup;
  alumno!:Alumnos;
  idAlumno: string = String(Math.round(Math.random() * 1000));
  listaCursos: Array<any>=[];
  cursosActuales$!: Observable<Curso[]>;

  constructor(
    private cursosService: CursosService,
    private alumnosService: ListaAlumnosService,
    private rutas:Router,
    private rutaActivada: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cursosActuales$= this.cursosService.getCursosObservable(),
    this.listaCursos.push(this.cursosActuales$.subscribe((data)=>{
      this.listaCursos=data
    })
    )

    this.rutaActivada.paramMap.subscribe((parametros)=>{
      this.alumno={
        idAlumno: parseInt(parametros.get('id') || this.idAlumno),
        nombre: parametros.get('nombre') || '',
        apellido: parametros.get('apellido') || '',
        correo: parametros.get('correo') || '',
        cursoActual: parametros.get('cursoActual')
      }
    })

    this.form= new FormGroup({
      nombre: new FormControl(this.alumno.nombre),
      apellido: new FormControl(this.alumno.apellido),
      correo: new FormControl(this.alumno.correo),
      cursoActual: new FormControl(this.alumno.cursoActual.nombre)
  })
  }

  editarCurso(){
    let alumno:Alumnos={
        idAlumno: this.alumno.idAlumno,
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        correo: this.form.value.correo,
        cursoActual: this.form.value.cursoActual.nombre,
    }

    this.alumnosService.editarCurso(alumno)
    this.rutas.navigate(['alumnos/lista-alumnos'])
  }

  retroceder(){
    this.rutas.navigate(['alumnos/lista-alumnos']);
  }

}
