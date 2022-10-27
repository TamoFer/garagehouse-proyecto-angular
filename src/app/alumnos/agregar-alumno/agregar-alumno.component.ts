import { Alumnos } from './../../models/alumnos';
import { ListaAlumnosService } from './../services/lista-alumnos.service';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialogs',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.scss']
})

export class AgregarAlumnoComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private alumnosService:ListaAlumnosService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  alumnoNuevo: FormGroup = this.fb.group(
    {
      nombre:['',Validators.required],
      apellido: ['',Validators.required],
      correo:['',Validators.required],
      curso:['',Validators.required]

    }
  )

  agregarAlumno(){
    const alumno: Alumnos = {
      idAlumno: Math.round(Math.random() * 1000),
      nombre: this.alumnoNuevo.value.nombre,
      apellido: this.alumnoNuevo.value.apellido,
      correo: this.alumnoNuevo.value.correo,
      cursoActual: this.alumnoNuevo.value.curso

    };
    this.alumnosService.agregarAlumno(alumno);
    this.route.navigate(['alumnos/lista-alumnos']);
  }

  retroceder(){
    this.route.navigate(['alumnos/lista-alumnos']);
  }



}
