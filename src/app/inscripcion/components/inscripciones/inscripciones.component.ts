import { agregarInscripcion, eliminarInscripcion } from './../../state/inscripcion.actions';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Inscripcion } from 'src/app/models/inscripcion';
import { InscripcionState } from 'src/app/models/models-state/inscripcion.state';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { cargarInscripciones } from '../../state/inscripcion.actions';
import { selectInscripciones } from '../../state/inscripcion.selectors';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { EditarInscripcionComponent } from '../editar-inscripcion/editar-inscripcion.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {

  suscripcionSesion!: Subscription;
  suscripcionInscripcionData!: Subscription;
  dataSource: MatTableDataSource<Inscripcion>= new MatTableDataSource<Inscripcion>();
  usuarioActivo?: Usuario;
  cursoSeleccionado!: Curso;
  columnasUsuario: string[] = ['estudiante', 'curso', 'fechaInscripcion'];
  columnasAdmin: string[] = ['estudiante', 'curso', 'fechaInscripcion', 'acciones'];
  formulario!: FormGroup;

  constructor(
    private storeInscripciones: Store<InscripcionState>,
    private storeSesion: Store<Sesion>,
    private dialog: MatDialog
  ) {
    this.storeInscripciones.dispatch(cargarInscripciones());
  }

  ngOnInit(): void {
    this.suscripcionInscripcionData= this.storeInscripciones.select(selectInscripciones).subscribe((inscripciones: Inscripcion[]) => {
      this.dataSource = new MatTableDataSource<Inscripcion>(inscripciones);
    });

    this.suscripcionSesion= this.storeSesion.select(selectSesionActiva).subscribe((sesion: Sesion) => {
      this.usuarioActivo = sesion.usuarioActivo;
    })

    this.formulario= new FormGroup({
      estudiante: new FormControl ('',[]),
      curso: new FormControl('', [])
    })
  }

  ngOnDestroy(): void {
    this.suscripcionInscripcionData.unsubscribe();
    this.suscripcionSesion.unsubscribe();
  }

  editar(inscripcion: Inscripcion){
    this.dialog.open(EditarInscripcionComponent, {
      width: '300px',
      data: inscripcion
    })
  }

  eliminar(inscripcion: Inscripcion){
    this.storeInscripciones.dispatch(eliminarInscripcion({inscripcion}));
  }

  buscarXEstudiante(){
    const valorObtenido = this.formulario.get('estudiante')?.value;
    this.storeInscripciones.select(selectInscripciones).pipe(
      map((inscripciones:Inscripcion[])=> inscripciones.filter((i:Inscripcion)=>
        (i.alumno.nombre+' '+i.alumno.apellido).toLowerCase()=== valorObtenido.toLowerCase())
        )
      ).subscribe((inscripcion)=>{
        this.dataSource.data = inscripcion;
      })
  }
  vaciarCampoEstudiante(){
    this.formulario.get('estudiante')?.value;
    this.storeInscripciones.select(selectInscripciones).subscribe((inscripcion:Inscripcion[])=>{
      this.dataSource= new MatTableDataSource<Inscripcion>(inscripcion)
    })
  }

  buscarXCurso(){
    const valorObtenido = this.formulario.get('curso')?.value;
    this.storeInscripciones.select(selectInscripciones).pipe(
      map((inscripciones:Inscripcion[])=> inscripciones.filter((i:Inscripcion)=>
        i.curso.nombre.toLowerCase() === valorObtenido.toLowerCase())
        )
      ).subscribe((inscripcion)=>{
        this.dataSource.data = inscripcion;
      })
  }
  vaciarCampoCurso(){
    this.formulario.get('curso')?.value;
    this.storeInscripciones.select(selectInscripciones).subscribe((inscripcion:Inscripcion[])=>{
      this.dataSource= new MatTableDataSource<Inscripcion>(inscripcion)
    })
  }

}
