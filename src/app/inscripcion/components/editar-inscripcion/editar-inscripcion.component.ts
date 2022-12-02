import { selectAlumnos } from 'src/app/alumnos/state/alumnos.selectors';
import { cursosCargados } from './../../../cursos/state/cursos.actions';
import { selectCursos } from './../../../cursos/state/cursos.selectors';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { Inscripcion } from 'src/app/models/inscripcion';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { Alumnos } from 'src/app/models/alumnos';
import { Usuario } from 'src/app/models/usuario';
import { selectUsuarios } from 'src/app/usuarios/state/usuarios.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { editarInscripcion } from '../../state/inscripcion.actions';

@Component({
  selector: 'app-editar-inscripcion',
  templateUrl: './editar-inscripcion.component.html',
  styleUrls: ['./editar-inscripcion.component.scss']
})
export class EditarInscripcionComponent implements OnInit {

  formulario!: FormGroup;
  suscripcionCursos!: Subscription;
  cursos$!: Observable<Curso[]>;
  alumnos$!: Observable<Alumnos[]>;
  usuarios$!: Observable<Usuario[]>;
  curso_id!: Curso;
  alumno_id!: Alumnos;
  usuario_id!: Usuario;

  constructor(
    private dialogRef: MatDialogRef<EditarInscripcionComponent>,
    private storeCursos: Store<Curso>,
    private storeAlumnos: Store<Alumnos>,
    private storeInscripciones: Store<Inscripcion>,
    private storeUsuarios: Store<Usuario>,
    @Inject(MAT_DIALOG_DATA) public inscripcion: Inscripcion,
    private snackBar: MatSnackBar
  ) {
    this.cursos$ = this.storeCursos.select(selectCursos)
    this.alumnos$ = this.storeAlumnos.select(selectAlumnos)
    this.usuarios$ = this.storeUsuarios.select(selectUsuarios)
    this.alumnos$.forEach((alumnos) => {
      alumnos.filter((alumno) => {
        if (alumno.idAlumno === this.inscripcion.id_alumno) {
          this.alumno_id = alumno
        }
      })
    })

    this.cursos$.forEach((cursos) => {
      cursos.filter((curso) => {
        if (curso.id === this.inscripcion.id_curso) {
          this.curso_id = curso
        }
      })
    })

    this.usuarios$.forEach((usuarios) => {
      usuarios.filter((usuario) => {
        if (usuario.id === this.inscripcion.id_usuario) {
          this.usuario_id = usuario
        }
      })
    })


  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id_curso: new FormControl(this.inscripcion.id_curso+ '-' + ' ' + this.curso_id.nombre),
      id_alumno: new FormControl(this.inscripcion.id_alumno + '-' + ' ' + this.alumno_id.nombre + ' ' + this.alumno_id.apellido),
      id_usuario: new FormControl(this.inscripcion.id_usuario + '-' + ' ' + this.usuario_id.nameUsuario),
      fechaInscripcion: new FormControl(new Date(this.inscripcion.fechaInscripcion).toLocaleDateString()),
      curso: new FormControl(''),
      alumno: new FormControl('')
    })
  }

  ngOnDestroy(): void {
  }

  editarInscripcion() {
    const i: Inscripcion = {
      id: this.inscripcion.id,
      id_alumno: this.formulario.get('alumno')?.touched ? this.formulario.value.alumno : this.inscripcion.id_alumno,
      id_curso: this.formulario.get('curso')?.touched ? this.formulario.value.curso : this.inscripcion.id_curso,
      id_usuario: this.inscripcion.id_usuario,
      fechaInscripcion: this.formulario.get('fechaInscripcion')?.touched ? this.formulario.value.fechaInscripcion : this.inscripcion.fechaInscripcion
    }
    this.storeInscripciones.dispatch(editarInscripcion({ inscripcion: i }))
    this.snackBar.open(`Inscripcion editada Exitosamente`, '', {
      duration: 1500,
      panelClass: ['mat-toolbar', 'mat-accent'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.dialogRef.close()

  }

  retroceder() {
    this.dialogRef.close()
  }


}
