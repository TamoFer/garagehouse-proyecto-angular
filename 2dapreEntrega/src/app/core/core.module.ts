import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    InicioComponent,
    ToolbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
