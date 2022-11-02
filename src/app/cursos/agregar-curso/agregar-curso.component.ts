import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.scss']
})
export class AgregarCursoComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private cursosService:CursosService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  cursoNuevo: FormGroup = this.fb.group(
    {
      nombre:['',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]],
      profe: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]],
      inicio:['',[Validators.required]],
      fin:['',[Validators.required]],
      descripcion:['',[Validators.required,Validators.minLength(10), Validators.maxLength(50)]],
      disponibilidad:['',[Validators.required]],
      img:['']
    }
  )

  agregarCurso(){
    const curso: Curso = {
      id: Math.round(Math.random() * 1000),
      nombre: this.cursoNuevo.value.nombre,
      profesor: this.cursoNuevo.value.profe,
      finicio: this.cursoNuevo.value.inicio,
      ftermino: this.cursoNuevo.value.fin,
      descripcion: this.cursoNuevo.value.descripcion,
      disponibilidad: this.cursoNuevo.value.disponibilidad,
      img: '../../../assets/images/webdesing.jpg',
    };
    this.cursosService.agregarCurso(curso);
    this.route.navigate(['cursos/cursos-cards']);
  }

  retroceder(){
    this.route.navigate(['cursos/cursos-cards']);
  }

}
