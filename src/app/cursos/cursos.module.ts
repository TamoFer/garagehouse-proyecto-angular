import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CardsComponent } from './cards/cards.component';
import { ModificacionCursoComponent } from './modificacion-curso/modificacion-curso.component';
import { AltaCursoComponent } from './alta-curso/alta-curso.component';
import { BajaCursoComponent } from './baja-curso/baja-curso.component';


@NgModule({
  declarations: [
    CardsComponent,
    ModificacionCursoComponent,
    AltaCursoComponent,
    BajaCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
