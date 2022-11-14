import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { BajaUsuarioComponent } from './components/baja-usuario/baja-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { reducer, usuariosFeatureKey } from './state/usuarios.reducer';


@NgModule({
  declarations: [
    AltaUsuarioComponent,
    BajaUsuarioComponent,
    EditarUsuarioComponent,
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    StoreModule.forFeature(usuariosFeatureKey,reducer)
  ]
})
export class UsuariosModule { }
