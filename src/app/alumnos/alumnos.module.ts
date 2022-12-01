import { AlumnosEffects } from './state/alumnos.effects';
import { EffectsModule } from '@ngrx/effects';
import { InicioAlumnosComponent } from './components/inicio-alumnos/inicio-alumnos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablesComponent } from './components/lista-alumnos/tables.component';
import { StoreModule } from '@ngrx/store';
import { alumnosFeatureKey, alumnosReducer } from './state/alumnos.reducer';
import { VerDetallesComponentAlumno } from './components/ver-detalles-alumno/ver-detalles-alumno.component';


@NgModule({
  declarations: [
    TablesComponent,
    AgregarAlumnoComponent,
    EditarAlumnoComponent,
    InicioAlumnosComponent,
    VerDetallesComponentAlumno
  ],
  providers: [

  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(alumnosFeatureKey, alumnosReducer),
    EffectsModule.forFeature([AlumnosEffects])

  ]
})
export class AlumnosModule { }
