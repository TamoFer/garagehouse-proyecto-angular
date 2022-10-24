import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CardsComponent } from './cards/cards.component';
import { AltaComponent } from './alta/alta.component';
import { BajaComponent } from './baja/baja.component';
import { ModificacionComponent } from './modificacion/modificacion.component';
import { ModificacionCursoComponent } from './modificacion-curso/modificacion-curso.component';
import { AltaCursoComponent } from './alta-curso/alta-curso.component';
import { BajaCursoComponent } from './baja-curso/baja-curso.component';


@NgModule({
  declarations: [
    CardsComponent,
    AltaComponent,
    BajaComponent,
    ModificacionComponent,
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
