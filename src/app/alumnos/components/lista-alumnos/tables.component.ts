import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { Alumnos } from 'src/app/models/alumnos';
import { Observable } from 'rxjs/internal/Observable';
import { Component,OnInit,} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListaAlumnosService } from 'src/app/alumnos/services/lista-alumnos.service';
import { map, of, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { Store } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  usuarioActivo?: Usuario;
  lista!: any;
  suscripcion!: Subscription;
  susData!:Subscription;
  listaAlumnos$!: Observable<Alumnos[]>;
  columnasAdmin: string[] = ['nombre', 'apellido', 'correo', 'cursando', 'actions'];
  columnasUsuario: string[] = ['nombre', 'apellido', 'correo', 'cursando'];
  data: MatTableDataSource<Alumnos>= new MatTableDataSource<Alumnos>();
  busquedaEnTabla!: FormGroup;

  constructor(
    private alumnosService: ListaAlumnosService,
    private ruta: Router,
    private storeSesion: Store<Sesion>
  ) {
  }

  ngOnInit(): void {
    this.storeSesion.select(selectSesionActiva).subscribe((datos)=>{
      this.usuarioActivo=datos.usuarioActivo
    })

    this.listaAlumnos$=this.alumnosService.obtenerAlumnos(),
    this.susData=this.listaAlumnos$.subscribe(
      (alumnos:Alumnos[])=> this.data.data= alumnos
    ),
    this.suscripcion= this.listaAlumnos$.subscribe((alumnos)=>{
      this.lista=alumnos
    })

    this.busquedaEnTabla= new FormGroup({
      apellido: new FormControl ('',[]),
      curso: new FormControl('',[])
    })
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
    this.susData.unsubscribe()
  }

  buscarXApellido(){
    const valorObtenido = this.busquedaEnTabla.get('apellido')?.value;

    if(valorObtenido==''){
      this.data.data=this.lista
    }else{
      of(this.lista).pipe(
        map((alumnos:Alumnos[]) => alumnos.filter((alumno: Alumnos) => alumno.apellido.toLowerCase() === valorObtenido))
      ).subscribe((alumnos) => {
        this.data.data= alumnos
      });
    }
  }

  buscarXCurso(){
    const valorObtenido = this.busquedaEnTabla.get('curso')?.value;

    if(valorObtenido===''){
      this.data.data=this.lista
    }else{
      of(this.lista).pipe(
        map((alumnos:Alumnos[]) => alumnos.filter((alumno: Alumnos) => alumno.cursoActual.nombre.toLowerCase() === valorObtenido))
      ).subscribe((alumnos) => {
        this.data.data= alumnos
      });
    }
  }

  vaciarCampoCurso(){
    this.busquedaEnTabla.get('curso')?.reset()
  }

  vaciarCampoApellido(){
    this.busquedaEnTabla.get('apellido')?.reset()
  }

  addAlumno(){
    this.ruta.navigate(['alumnos/add-alumno'])
  }

  editarAlumno(alumno:Alumnos){
    const datos={
      ...alumno,
      cursoActual: JSON.stringify(alumno.cursoActual)
    }
    this.ruta.navigate(['alumnos/edit-alumno', datos])
  }

  borrarAlumno(id:number){
    // this.alumnosService.eliminarAlumnos(id),
    // this.data.data=this.lista
  }


}

