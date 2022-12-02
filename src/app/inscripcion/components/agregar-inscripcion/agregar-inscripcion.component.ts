import { MatDialogRef } from '@angular/material/dialog';
import { selectCursos } from './../../../cursos/state/cursos.selectors';
import { selectAlumnos } from 'src/app/alumnos/state/alumnos.selectors';
import { Inscripcion } from 'src/app/models/inscripcion';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Alumnos } from 'src/app/models/alumnos';
import { Curso } from 'src/app/models/curso';
import { Store } from '@ngrx/store';
import { agregarInscripcion } from '../../state/inscripcion.actions';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar-inscripcion',
  templateUrl: './agregar-inscripcion.component.html',
  styleUrls: ['./agregar-inscripcion.component.scss']
})
export class AgregarInscripcionComponent implements OnInit {

  formulario!: FormGroup;
  alumnos$!: Observable<Alumnos[]>;
  cursos$!: Observable<Curso[]>;
  usuarioActivo?:Usuario;
  id!:number;
  suscripcionSesion!: Subscription;

  constructor(
    private storeAlumnos: Store<Alumnos>,
    private storeCursos: Store<Curso>,
    private storeInscripciones: Store<Inscripcion>,
    private storeSesion: Store<Sesion>,
    private dialogRef: MatDialogRef<AgregarInscripcionComponent>,
    private snackBar: MatSnackBar

  ) {
    this.alumnos$ = this.storeAlumnos.select(selectAlumnos);
    this.cursos$ = this.storeCursos.select(selectCursos);

    this.suscripcionSesion=this.storeSesion.select(selectSesionActiva).subscribe((datosSesion)=>{
      this.usuarioActivo= datosSesion.usuarioActivo
    })

    this.formulario = new FormGroup({
      alumno: new FormControl('',[Validators.required]),
      curso: new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.suscripcionSesion!=undefined) {
      this.suscripcionSesion.unsubscribe();
    }
  }

  agregarInscripto(){
    const i: Inscripcion = {
      id:this.id,
      id_curso: this.formulario.value.curso,
      id_alumno: this.formulario.value.alumno,
      id_usuario: this.usuarioActivo?.id,
      fechaInscripcion: new Date()
    }
    this.storeInscripciones.dispatch(agregarInscripcion({inscripcion:i}))
    this.snackBar.open( `Inscripcion agregada`,'' , {
      duration: 1500,
      panelClass: ['mat-toolbar', 'mat-accent'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.dialogRef.close()
  }

  retroceder(){
    this.dialogRef.close();
  }
}
