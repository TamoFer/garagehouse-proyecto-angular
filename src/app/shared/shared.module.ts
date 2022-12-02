import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosModule } from '../cursos/cursos.module';
import { AlumnosModule } from '../alumnos/alumnos.module';
import { HttpClientModule } from '@angular/common/http';
import { InscripcionModule } from '../inscripcion/inscripcion.module';
import { UsuariosModule } from '../usuarios/usuarios.module';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CursosModule,
    AlumnosModule,
    InscripcionModule,
    UsuariosModule,
    HttpClientModule
  ]
})
export class SharedModule { }
