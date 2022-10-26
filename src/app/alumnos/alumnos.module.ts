import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablesComponent } from './lista-alumnos/tables.component';
import { InicioAlumnosComponent } from './inicio-alumnos/inicio-alumnos.component';


@NgModule({
  declarations: [
    TablesComponent,
    AgregarAlumnoComponent,
    EditarAlumnoComponent,
    InicioAlumnosComponent,
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AlumnosModule { }
