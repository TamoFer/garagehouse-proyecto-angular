import { editarAlumno } from './../../../alumnos/state/alumnos.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { editarCurso } from '../../state/cursos.actions';
import { ListaAlumnosService } from 'src/app/alumnos/services/lista-alumnos.service';
import { Alumnos } from 'src/app/models/alumnos';
import { Subscription } from 'rxjs';
import { alumnosCargados } from 'src/app/alumnos/state/alumnos.actions';
import { selectAlumnos } from 'src/app/alumnos/state/alumnos.selectors';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.scss']
})
export class EditarCursoComponent implements OnInit {

  form!:FormGroup;
  alumnos:Array<any>=[];
  suscripcionAlumnos!:Subscription;

  constructor(
    public dialogRef: MatDialogRef<EditarCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public curso:Curso,
    private storeCursos: Store<Curso>,
    private alumnosService: ListaAlumnosService,
    private storeAlumnos: Store<Alumnos>

  ) { }

  ngOnInit(): void {
    this.suscripcionAlumnos= this.alumnosService.obtenerAlumnos().subscribe({
      next: (alumnos:Alumnos[]) =>{
        this.storeAlumnos.dispatch(alumnosCargados({alumnos}))
      }
    })

    this.alumnos.push(this.storeAlumnos.select(selectAlumnos).subscribe((alumnos)=> {this.alumnos= alumnos}))

    this.form= new FormGroup({
        nombre: new FormControl(this.curso.nombre, [Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
        profe: new FormControl(this.curso.profesor, [Validators.required,Validators.minLength(3), Validators.maxLength(25)]),
        inicio: new FormControl(this.curso.finicio),
        fin: new FormControl(this.curso.ftermino),
        descripcion: new FormControl(this.curso.descripcion, [Validators.minLength(10), Validators.maxLength(25)]),
        disponibilidad:new FormControl(this.curso.disponibilidad)
    })
  }

  editarCurso(){

    const cursoEditado:Curso = {
        id: this.curso.id,
        nombre: this.form.value.nombre,
        profesor: this.form.value.profe,
        finicio: this.form.value.inicio,
        ftermino: this.form.value.fin,
        descripcion: this.form.value.descripcion,
        disponibilidad:this.form.value.disponibilidad
    }

    this.storeCursos.dispatch(editarCurso({curso:cursoEditado}))
    this.dialogRef.close();

  }

  retroceder(){
    this.dialogRef.close();

  }
}
