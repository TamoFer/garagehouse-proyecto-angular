import { editarAlumno } from './../../../alumnos/state/alumnos.actions';
import { Usuario } from 'src/app/models/usuario';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { editarUsuario } from '../../state/usuarios.actions';
import { Subscription } from 'rxjs';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { Curso } from 'src/app/models/curso';
import { cursosCargados } from 'src/app/cursos/state/cursos.actions';
import { selectCursos } from 'src/app/cursos/state/cursos.selectors';
import { ListaAlumnosService } from 'src/app/alumnos/services/lista-alumnos.service';
import { Alumnos } from 'src/app/models/alumnos';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  formulario!: FormGroup;
  hide=true;
  cursos: Array<any> = [];
  suscripcionCursos!: Subscription;


  constructor(
    private dialogRef: MatDialogRef<EditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public usuario:Usuario,
    private storeUsuario: Store<Usuario>,
    private cursosService: CursosService,
    private storeCursos: Store<Curso>,
    private alumnosService: ListaAlumnosService,
    private storeAlumnos: Store<Alumnos>

  ) {
    this.formulario= new FormGroup({
      nameUsuario: new FormControl(this.usuario.nameUsuario),
      contrasena: new FormControl(this.usuario.contrasena),
      admin: new FormControl(this.usuario.admin),
      nombre: new FormControl(this.usuario.estudiante?.nombre),
      apellido: new FormControl(this.usuario.estudiante?.apellido),
      correo: new FormControl(this.usuario.estudiante?.correo),
      cursoActual: new FormControl(this.usuario.estudiante?.cursoActual?.nombre)
    })
  }

  ngOnInit(): void {
    this.suscripcionCursos = this.cursosService.obtenerCursos().subscribe({
      next: (cursos: Curso[]) => {
        this.storeCursos.dispatch(cursosCargados({ cursos }))
      }
    });

    this.cursos.push(this.storeCursos.select(selectCursos).subscribe((cursos) => { this.cursos = cursos }));
  }

  editarUsuario(){
    const estudiante: Alumnos = {
      idAlumno: this.usuario.estudiante?.idAlumno,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      correo: this.formulario.value.correo,
      cursoActual: this.asociarCurso()
    }

    const u:Usuario = {
      id: this.usuario.id,
      nameUsuario: this.formulario.value.nameUsuario,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin,
      estudiante: estudiante
    }

    this.storeAlumnos.dispatch(editarAlumno({alumno:estudiante}))
    this.storeUsuario.dispatch(editarUsuario({usuario:u}))
    this.dialogRef.close();
  }

  asociarCurso(){
    const cursoListado= this.cursos.find(curso=> curso.nombre === this.formulario.value.cursoActual);
    return this.formulario.value.cursoActual=cursoListado;
  }

  retroceder(){
    this.dialogRef.close();
  }
}
