import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AltaComponent } from './alta/alta.component';
import { BajaComponent } from './baja/baja.component';
import { ModificacionComponent } from './modificacion/modificacion.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { BajaAlumnoComponent } from './baja-alumno/baja-alumno.component';
import { ModificacionAlumnoComponent } from './modificacion-alumno/modificacion-alumno.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';


@NgModule({
  declarations: [
    AltaComponent,
    BajaComponent,
    ModificacionComponent,
    AltaAlumnoComponent,
    BajaAlumnoComponent,
    ModificacionAlumnoComponent,
    ListaAlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
