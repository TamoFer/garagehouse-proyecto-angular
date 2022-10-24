import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { AltaCursoComponent } from './alta-curso/alta-curso.component';
import { BajaCursoComponent } from './baja-curso/baja-curso.component';
import { ModificacionCursoComponent } from './modificacion-curso/modificacion-curso.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    AltaCursoComponent,
    BajaCursoComponent,
    ModificacionCursoComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
