import { InscripcionEffects } from './state/inscripcion.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { AltaAlumnoComponent } from './components/alta-alumno/alta-alumno.component';
import { BajaAlumnoComponent } from './components/baja-alumno/baja-alumno.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { inscripcionFeatureKey, inscripcionReducer } from './state/inscripcion.reducer';
import { EditarInscripcionComponent } from './components/editar-inscripcion/editar-inscripcion.component';


@NgModule({
  declarations: [
    AltaAlumnoComponent,
    BajaAlumnoComponent,
    InscripcionesComponent,
    EditarInscripcionComponent
  ],
  imports: [
    CommonModule,
    InscripcionRoutingModule,
    MaterialModule,
    StoreModule.forFeature(inscripcionFeatureKey,inscripcionReducer),
    EffectsModule.forFeature([InscripcionEffects])
  ]
})
export class InscripcionModule { }
