import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { EliminarAlumnoComponent } from './eliminar-alumno/eliminar-alumno.component';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { MaterialModule } from '../material.module';
import { ListaAlumnosService } from '../services/lista-alumnos.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EliminarAlumnoComponent,
    AgregarAlumnoComponent,
    EditarAlumnoComponent,
    ListaAlumnosService
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AlumnosModule { }
