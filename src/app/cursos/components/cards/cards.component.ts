import { MatDialog } from '@angular/material/dialog';
import { eliminarCurso } from './../../state/cursos.actions';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { selectCursos } from 'src/app/cursos/state/cursos.selectors';
import { Component, OnInit } from '@angular/core';
import { map,Subscription } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { CursoState } from 'src/app/models/models-state/curso.state';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { MatTableDataSource } from '@angular/material/table';
import { AgregarCursoComponent } from '../agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';
import { ToolbarTitleService } from 'src/app/core/services/toolbar-title.service';
import { VerDetallesComponentCurso } from '../ver-detalles-curso/ver-detalles-curso.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cards',
  templateUrl: `./cards.component.html`,
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {

  suscripcionCursos!: Subscription;
  suscripcionSesion!: Subscription;
  suscripcionCursoData!: Subscription;
  opened=false;

  usuarioActivo?: Usuario;
  formulario!: FormGroup;

  columnasAdmin: string[] = ['nombre', 'profesor', 'comision', 'actions'];
  columnasUsuario: string[] = ['nombre', 'profesor', 'comision'];
  data: MatTableDataSource<Curso> = new MatTableDataSource<Curso>();
  seccion: string='Cursos';

  constructor(
    private storeCursos: Store<CursoState>,
    private storeSesion: Store<Sesion>,
    private dialog: MatDialog,
    private toolbarService: ToolbarTitleService,
    private snackBar: MatSnackBar
  ) {
    this.formulario = new FormGroup({
      curso: new FormControl('', []),
    })
  }

  ngOnInit(): void {
    this.suscripcionSesion = this.storeSesion.select(selectSesionActiva).subscribe((s: Sesion) => {
      this.usuarioActivo = s.usuarioActivo
    })

    this.suscripcionCursoData = this.storeCursos.select(selectCursos).subscribe((cursos: Curso[]) => {
      this.data = new MatTableDataSource<Curso>(cursos);
    });

    this.toolbarService.editarTitleComponent(this.seccion)
  }

  ngOnDestroy(): void {
    this.suscripcionCursoData.unsubscribe();
    this.suscripcionSesion.unsubscribe();
  }

  agregarCurso() {
    this.dialog.open(AgregarCursoComponent,{})
  }


  editarDatos(curso: Curso) {
    this.dialog.open(EditarCursoComponent, {
      data: curso
    })
  }

  eliminarCurso(curso: Curso) {
    this.storeCursos.dispatch(eliminarCurso({curso}));
    this.snackBar.open(` Curso ${curso.nombre} eliminado `,'' , {
      duration: 1500,
      panelClass: ['mat-toolbar', 'mat-warn'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  buscarXCurso() {
    const valorObtenido = this.formulario.get('curso')?.value;
    this.storeCursos.select(selectCursos).pipe(
      map((cursos: Curso[]) => cursos.filter((c: Curso) =>
        c.nombre.toLowerCase() === valorObtenido.toLowerCase())
      )
    ).subscribe((cursos) => {
      this.data.data = cursos
    })

  }

  vaciarCampoCurso() {
    this.formulario.get('curso')?.reset()
    this.storeCursos.select(selectCursos).subscribe((cursos: Curso[]) => {
      this.data = new MatTableDataSource<Curso>(cursos);
    })
  }

  verDetalles(curso:Curso) {
    this.dialog.open(VerDetallesComponentCurso,{
      data: curso,
      width: '50rem'
    })
  }

}
