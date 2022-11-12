import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { BajaAlumnoComponent } from './baja-alumno/baja-alumno.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';


@NgModule({
  declarations: [
    AltaAlumnoComponent,
    BajaAlumnoComponent,
    InscripcionesComponent
  ],
  imports: [
    CommonModule,
    InscripcionRoutingModule
  ]
})
export class InscripcionModule { }
