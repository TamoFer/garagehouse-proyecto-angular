import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { BajaUsuarioComponent } from './components/baja-usuario/baja-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';


@NgModule({
  declarations: [
    AltaUsuarioComponent,
    BajaUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
