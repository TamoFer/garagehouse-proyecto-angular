import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionOpcionesComponent } from './components/autenticacion-opciones/autenticacion-opciones.component';
import { LoginComponent } from './components/login/login.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';

const routes: Routes = [
  {path: 'autenticacion', component: AutenticacionOpcionesComponent, children:[
    { path: 'login', component: LoginComponent },
    { path: 'nuevo-usuario', component: NuevoUsuarioComponent }
  ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule { }
