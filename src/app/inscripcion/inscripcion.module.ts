import { InscripcionEffects } from './state/inscripcion.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { inscripcionFeatureKey, inscripcionReducer } from './state/inscripcion.reducer';
import { EditarInscripcionComponent } from './components/editar-inscripcion/editar-inscripcion.component';
import { AgregarInscripcionComponent } from './components/agregar-inscripcion/agregar-inscripcion.component';


@NgModule({
  declarations: [
    InscripcionesComponent,
    EditarInscripcionComponent,
    AgregarInscripcionComponent
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
