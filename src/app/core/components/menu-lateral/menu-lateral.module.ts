import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuLateralRoutingModule } from './menu-lateral-routing.module';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';


@NgModule({
  declarations: [
    MenuAdminComponent,
    MenuUsuarioComponent
  ],
  imports: [
    CommonModule,
    MenuLateralRoutingModule
  ]
})
export class MenuLateralModule { }
