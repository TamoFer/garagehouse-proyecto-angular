import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { EliminarCursoComponent } from './eliminar-curso/eliminar-curso.component';
import { MaterialModule } from '../material.module';
import { CardsComponent } from '../components/cards/cards.component';


@NgModule({
  declarations: [
    CardsComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
    EliminarCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule
  ]
})
export class CursosModule { }
