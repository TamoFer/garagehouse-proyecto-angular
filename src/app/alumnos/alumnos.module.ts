import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { EliminarAlumnoComponent } from './eliminar-alumno/eliminar-alumno.component';


@NgModule({
  declarations: [
    EliminarAlumnoComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
