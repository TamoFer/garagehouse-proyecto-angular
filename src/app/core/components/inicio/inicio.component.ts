import { cargarUsuarios } from './../../../usuarios/state/usuarios.actions';
import { cargarInscripciones } from './../../../inscripcion/state/inscripcion.actions';
import { cargarCursos } from './../../../cursos/state/cursos.actions';
import { cargarAlumnos } from './../../../alumnos/state/alumnos.actions';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { ToolbarTitleService } from 'src/app/core/services/toolbar-title.service';
import { Alumnos } from 'src/app/models/alumnos';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';
import { Inscripcion } from 'src/app/models/inscripcion';
import { Sesion } from 'src/app/models/sesion';
import { selectSesionActiva } from '../../state/sesion.selectors';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  cursos$!:Observable<Curso[]>
  seccion:string='Inicio'
  usuarioActivo!: Usuario;
  suscripcionSesion!:Subscription;

  constructor(
    private toolbarService: ToolbarTitleService,
    private storeSesion: Store<Sesion>,
    private storeAlumnos: Store<Alumnos>,
    private storeCursos: Store<Curso>,
    private storeUsuarios: Store<Usuario>,
    private storeInscripciones: Store<Inscripcion>
  ) { }

  ngOnDestroy(): void {
    if (this.suscripcionSesion!=undefined) {
      this.suscripcionSesion.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.toolbarService.editarTitleComponent(this.seccion);
    this.suscripcionSesion= this.storeSesion.select(selectSesionActiva).subscribe((datos)=>{
      this.usuarioActivo=datos.usuarioActivo
    })

    if (this.usuarioActivo?.admin) {
      this.storeAlumnos.dispatch(cargarAlumnos())
      this.storeCursos.dispatch(cargarCursos())
      this.storeInscripciones.dispatch(cargarInscripciones())
      this.storeUsuarios.dispatch(cargarUsuarios())
    }else{
      this.storeAlumnos.dispatch(cargarAlumnos())
      this.storeCursos.dispatch(cargarCursos())
      this.storeInscripciones.dispatch(cargarInscripciones())
    }
  }

}
