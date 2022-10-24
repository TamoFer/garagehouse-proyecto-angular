import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    InicioComponent,
    ToolbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
