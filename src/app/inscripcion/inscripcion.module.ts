import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { AltaAlumnoComponent } from './components/alta-alumno/alta-alumno.component';
import { BajaAlumnoComponent } from './components/baja-alumno/baja-alumno.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';


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
