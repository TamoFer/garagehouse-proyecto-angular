import { AdminGuard } from './../core/guards/admin.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioUsuariosComponent } from './components/inicio-usuarios/inicio-usuarios.component';
import { AutenticacionGuard } from '../core/guards/autenticacion.guard';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {path: 'usuario', component:InicioUsuariosComponent, canActivate: [AutenticacionGuard, AdminGuard],
  children:[
    {path: 'lista-usuarios', component:ListaUsuariosComponent, canActivate: [AutenticacionGuard, AdminGuard]},
    {path: 'alta-usuario', component:AltaUsuarioComponent, canActivate: [AutenticacionGuard, AdminGuard]},
    {path: 'editar-usuario', component:EditarUsuarioComponent, canActivate: [AutenticacionGuard, AdminGuard]}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
