import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosModule } from '../cursos/cursos.module';
import { AlumnosModule } from '../alumnos/alumnos.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CursosModule,
    AlumnosModule
  ]
})
export class SharedModule { }
