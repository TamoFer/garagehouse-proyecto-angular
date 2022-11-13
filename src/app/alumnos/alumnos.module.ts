import { InicioAlumnosComponent } from './components/inicio-alumnos/inicio-alumnos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablesComponent } from './components/lista-alumnos/tables.component';


@NgModule({
  declarations: [
    TablesComponent,
    AgregarAlumnoComponent,
    EditarAlumnoComponent,
    InicioAlumnosComponent
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
