import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { MaterialModule } from '../material.module';
import { InicioCursosComponent } from './inicio-cursos/inicio-cursos.component';
import { CardsComponent } from './cards/cards.component';


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
    MaterialModule
  ]
})
export class CursosModule { }
