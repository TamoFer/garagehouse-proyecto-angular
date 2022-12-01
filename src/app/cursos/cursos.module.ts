import { CursosEffects } from './state/cursos.effects';
import { EffectsModule } from '@ngrx/effects';
import { cursosFeatureKey, cursosReducer } from './state/cursos.reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { MaterialModule } from '../material.module';
import { InicioCursosComponent } from './components/inicio-cursos/inicio-cursos.component';
import { CardsComponent } from './components/cards/cards.component';
import { CursosService } from './services/cursos.service';
import { VerDetallesComponentCurso } from './components/ver-detalles-curso/ver-detalles-curso.component';


@NgModule({
  declarations: [
    AgregarCursoComponent,
    EditarCursoComponent,
    InicioCursosComponent,
    CardsComponent,
    VerDetallesComponentCurso
  ],

  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    StoreModule.forFeature(cursosFeatureKey,cursosReducer),
    EffectsModule.forFeature([CursosEffects])
  ],

  providers: [
    CursosService
  ]
})
export class CursosModule { }
