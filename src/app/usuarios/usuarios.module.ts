import { MaterialModule } from 'src/app/material.module';
import { UsuariosEffects } from './state/usuarios.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import {usuariosFeatureKey, usuariosReducer } from './state/usuarios.reducer';
import { InicioUsuariosComponent } from './components/inicio-usuarios/inicio-usuarios.component';


@NgModule({
  declarations: [
    ListaUsuariosComponent,
    AltaUsuarioComponent,
    EditarUsuarioComponent,
    InicioUsuariosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsuariosRoutingModule,
    StoreModule.forFeature(usuariosFeatureKey,usuariosReducer),
    EffectsModule.forFeature([UsuariosEffects])
  ]
})
export class UsuariosModule { }
