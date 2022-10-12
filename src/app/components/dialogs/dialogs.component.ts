import { Curso } from './../../models/curso';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})

export class DialogsComponent implements OnInit {
  cursos: Curso[] =[
    {id: 1, nombre:'Desarrollo Web', profesor: 'Matias Cordoba', finicio: new Date(2022,3,15), ftermino: new Date(2022,5,15), descripcion: 'Curso incial de programacion web donde veras HTML 5 y CSS3 entre demas cosas', disponibilidad:true},

    {id: 2, nombre:'JavaScript', profesor: 'Anthony Lopez', finicio: new Date(2022,5,29), ftermino: new Date(2022,7,10), descripcion: 'Curso donde aprenderas a potenciar tus conocimientos de maquetacion con Javascript', disponibilidad:true},

    {id: 3, nombre:'React Js', profesor: 'Abner Garcia', finicio: new Date(2022,7,29), ftermino: new Date(2022,9,15), descripcion: 'Aprenderas uno de los frameworks mas populares de programacion front-end', disponibilidad:true},

    {id: 4, nombre:'Angular', profesor: 'Abner Garcia', finicio: new Date(2022,7,29), ftermino: new Date(2022,9,15), descripcion: 'Aprenderas uno de los frameworks mas populares de programacion front-end', disponibilidad:false},

    {id: 5, nombre:'Backend', profesor: 'Juan Pablo Guerrero', finicio: new Date(2022,9,29), ftermino: new Date(2022,11,15), descripcion: 'Curso donde aprenderas todo lo relacionado con el desarrollo backend de una APP web', disponibilidad:false},

    {id: 6, nombre:'Python', profesor: 'Jack Lol', finicio: new Date(2022,8,10), ftermino: new Date(2022,10,10), descripcion: 'Curso donde aprenderas a manejar el lenguaje de programacion mas versatil de la actualidad', disponibilidad:true}
  ]

  AlumnoNuevo: FormGroup = this.fb.group(
    {
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      correo:['',Validators.required],
      cursoActual:['',Validators.required],
    }
  )

  constructor(
    public dialogRef: MatDialogRef<DialogsComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  save() {
    const cursoIngresado= this.AlumnoNuevo.value.cursoActual.toLocaleLowerCase();
    const cursoListado= this.cursos.find(curso=>curso.nombre.toLocaleLowerCase()===cursoIngresado)

    this.AlumnoNuevo.value.cursoActual=cursoListado;

    this.dialogRef.close(this.AlumnoNuevo.value)
  }



}

