import { UsuariosModule } from './../usuarios/usuarios.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { AutenticacionOpcionesComponent } from './components/autenticacion-opciones/autenticacion-opciones.component';


@NgModule({
  declarations: [
    AutenticacionOpcionesComponent,
    LoginComponent,
    NuevoUsuarioComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AutenticacionRoutingModule,
    SharedModule,
    UsuariosModule
  ]
})
export class AutenticacionModule { }
