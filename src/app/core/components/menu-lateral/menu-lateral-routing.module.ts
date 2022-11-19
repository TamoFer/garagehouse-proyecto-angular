import { AutenticacionGuard } from './../../guards/autenticacion.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'menus', component: MenuComponent ,canActivate:[AutenticacionGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuLateralRoutingModule { }
