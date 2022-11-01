import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from '../core/guards/autenticacion.guard';
import { ProfesorGuard } from '../core/guards/profesor.guard';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { CardsComponent } from './cards/cards.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { InicioCursosComponent } from './inicio-cursos/inicio-cursos.component';

const routes: Routes = [
  { path: 'cursos', component: InicioCursosComponent, children: [
    { path: 'cursos-cards', component: CardsComponent, canActivate:[AutenticacionGuard] },
    { path: 'agregar-curso', component: AgregarCursoComponent, canActivate: [ProfesorGuard] },
    { path: 'editar-curso', component: EditarCursoComponent, canActivate: [ProfesorGuard] }]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
