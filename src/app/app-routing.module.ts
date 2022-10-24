import { NgModule } from '@angular/core';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'alumnos', component: AlumnosModule },
  { path: 'cursos', component: CursosModule },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
