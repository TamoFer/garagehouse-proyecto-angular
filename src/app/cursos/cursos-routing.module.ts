import { AdminGuard } from './../core/guards/admin.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from '../core/guards/autenticacion.guard';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { CardsComponent } from './components/cards/cards.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { InicioCursosComponent } from './components/inicio-cursos/inicio-cursos.component';

const routes: Routes = [
  { path: 'cursos', component: InicioCursosComponent, children: [
    { path: 'cursos-cards', component: CardsComponent, canActivate:[AutenticacionGuard] },
    { path: 'agregar-curso', component: AgregarCursoComponent, canActivate: [AdminGuard] },
    { path: 'editar-curso', component: EditarCursoComponent, canActivate: [AdminGuard] }]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
