import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosModule } from '../cursos/cursos.module';
import { AlumnosModule } from '../alumnos/alumnos.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CursosModule,
    AlumnosModule,
    HttpClientModule
  ]
})
export class SharedModule { }
