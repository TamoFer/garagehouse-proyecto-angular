import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../services/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.scss']
})
export class EditarCursoComponent implements OnInit {
  form!:FormGroup;
  curso!:Curso;
  idCurso: string= String(Math.round(Math.random() * 1000))

  constructor(
    private cursosService:CursosService,
    private rutas:Router,
    private rutaActivada: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.rutaActivada.paramMap.subscribe((parametros)=>{
      this.curso={
        id: parseInt(parametros.get('id') || this.idCurso),
        nombre: parametros.get('nombre') || '',
        profesor: parametros.get('profesor') || '',
        finicio: new Date(parametros.get('finicio') || ''),
        ftermino: new Date(parametros.get('ftermino') || ''),
        descripcion: parametros.get('descripcion') || '',
        disponibilidad: parametros.get('disponibilidad')==='true',
        img: parametros.get('img') || ''
      }
    })

    this.form= new FormGroup({
        nombre: new FormControl(this.curso.nombre),
        profe: new FormControl(this.curso.profesor),
        inicio: new FormControl(this.curso.finicio),
        fin: new FormControl(this.curso.ftermino),
        descripcion: new FormControl(this.curso.descripcion),
        disponibilidad:new FormControl(this.curso.disponibilidad) ,
        img:new FormControl(this.curso.img)
    })
  }

  editarCurso(){
    let curso:Curso={
        id: this.curso.id,
        nombre: this.form.value.nombre,
        profesor: this.form.value.profe,
        finicio: this.form.value.inicio,
        ftermino: this.form.value.fin,
        descripcion: this.form.value.descripcion,
        disponibilidad:this.form.value.disponibilidad,
        img:this.form.value.img
    }
    this.cursosService.editarCurso(curso)
    console.log(curso);

    this.rutas.navigate(['cursos/cursos-cards'])
  }

  retroceder(){
    this.rutas.navigate(['cursos/cursos-cards']);
  }
}
