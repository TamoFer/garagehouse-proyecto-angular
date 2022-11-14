import { cursosFeatureKey, reducer } from './state/cursos.reducer';
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


@NgModule({
  declarations: [
    AgregarCursoComponent,
    EditarCursoComponent,
    InicioCursosComponent,
    CardsComponent
  ],

  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    StoreModule.forFeature(cursosFeatureKey,reducer)
  ],

  providers: [
    CursosService
  ]
})
export class CursosModule { }
