import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuLateralRoutingModule } from './menu-lateral-routing.module';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MenuLateralRoutingModule
  ]
})
export class MenuLateralModule { }
