import { agregarInscripcion, eliminarInscripcion } from './../../state/inscripcion.actions';
import { selectCursos } from 'src/app/cursos/state/cursos.selectors';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Inscripcion } from 'src/app/models/inscripcion';
import { CursoState } from 'src/app/models/models-state/curso.state';
import { InscripcionState } from 'src/app/models/models-state/inscripcion.state';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { cargarInscripciones } from '../../state/inscripcion.actions';
import { selectInscripciones } from '../../state/inscripcion.selectors';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { EditarInscripcionComponent } from '../editar-inscripcion/editar-inscripcion.component';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {
  dataSource!: MatTableDataSource<Inscripcion>;
  cursos$!: Observable<Curso[]>;
  usuarioActivo?: Usuario;
  cursoSeleccionado!: Curso;
  columnas: string[] = ['id', 'curso', 'estudiante', 'acciones'];

  constructor(
    private storeInscripciones: Store<InscripcionState>,
    private storeCursos: Store<CursoState>,
    private storeSesion: Store<Sesion>,
    private dialog: MatDialog
  ) {
    this.storeInscripciones.dispatch(cargarInscripciones());
  }

  ngOnInit(): void {
    this.storeInscripciones.select(selectInscripciones).subscribe((inscripciones: Inscripcion[]) => {
      this.dataSource = new MatTableDataSource<Inscripcion>(inscripciones);
    });
    this.cursos$ = this.storeCursos.select(selectCursos);
    this.storeSesion.select(selectSesionActiva).subscribe((sesion: Sesion) => {
      this.usuarioActivo = sesion.usuarioActivo;
    })
  }

  inscribir(curso: Curso){
    if(this.usuarioActivo){
      const inscripcion: Inscripcion = {
        id: 0,
        curso: curso,
        alumno: this.usuarioActivo,
        fechaInscripcion: new Date()
      };
      this.storeInscripciones.dispatch(agregarInscripcion({inscripcion}));
    }
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

}
