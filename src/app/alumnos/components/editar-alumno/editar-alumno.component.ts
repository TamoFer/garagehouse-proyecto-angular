import { editarAlumno } from './../../state/alumnos.actions';
import { Curso } from '../../../models/curso';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { Alumnos } from '../../../models/alumnos';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Inject,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { cursosCargados } from 'src/app/cursos/state/cursos.actions';
import { selectCursos } from 'src/app/cursos/state/cursos.selectors';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})


export class EditarAlumnoComponent implements OnInit {

  form!:FormGroup;
  alumnos!:Alumnos;
  cursos: Array<any>=[];
  suscripcionCursos!: Subscription;


  constructor(
    public dialogRef: MatDialogRef<EditarAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public alumno: Alumnos,
    private cursosService: CursosService,
    private storeCursos: Store<Curso>,
    private storeAlumnos: Store<Alumnos>

  ) {
    console.log(alumno);

    this.form= new FormGroup({
      nombre: new FormControl(this.alumno.nombre),
      apellido: new FormControl(),
      correo: new FormControl(),
      cursoActual: new FormControl()
  })
  }

  ngOnInit(): void {
    this.suscripcionCursos= this.cursosService.obtenerCursos().subscribe({
      next: (cursos: Curso[])=>{
        this.storeCursos.dispatch(cursosCargados({cursos}))
      }
    });

    this.cursos.push(this.storeCursos.select(selectCursos).subscribe((cursos)=>{this.cursos=cursos}));

  }

  editarCurso(){
    const alumno:Alumnos={
        idAlumno: this.alumno.idAlumno,
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        correo: this.form.value.correo,
        cursoActual: this.asociarCurso(),
    }
    this.storeAlumnos.dispatch(editarAlumno({alumno}))
  }

  asociarCurso(){
    const cursoListado= this.cursos.find(curso=> curso.nombre === this.form.value.cursoActual);
    return this.form.value.curso=cursoListado;
  }

  retroceder(){
    // this.rutas.navigate(['alumnos/lista-alumnos']);
  }

}
