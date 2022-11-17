import { NgModule } from '@angular/core';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';
import { LoginComponent } from './autenticacion/components/login/login.component';
import { InicioAlumnosComponent } from './alumnos/components/inicio-alumnos/inicio-alumnos.component';


export const routes: Routes = [
  { path: 'inicio', component: InicioComponent, canActivate: [AutenticacionGuard] },
  { path: 'alumnos', component: InicioAlumnosComponent, loadChildren: () => import('./alumnos/alumnos.module').then((m) => m.AlumnosModule), canActivate: [AutenticacionGuard] },
  { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule), canActivate: [AutenticacionGuard] },
  { path: 'autenticacion', loadChildren: () => import('./autenticacion/autenticacion.module').then((m) => m.AutenticacionModule) },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

