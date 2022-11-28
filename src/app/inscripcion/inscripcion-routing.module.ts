import { AgregarInscripcionComponent } from './components/agregar-inscripcion/agregar-inscripcion.component';
import { AutenticacionGuard } from './../core/guards/autenticacion.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { EditarInscripcionComponent } from './components/editar-inscripcion/editar-inscripcion.component';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  {
    path: 'inscripciones', component: InscripcionesComponent, canActivate: [AutenticacionGuard],
    children:
      [
        { path: 'editar-inscripcion', component: EditarInscripcionComponent, canActivate: [AutenticacionGuard, AdminGuard] },
        { path: 'agregar-inscripcion', component: AgregarInscripcionComponent, canActivate: [AutenticacionGuard] },

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionRoutingModule { }
