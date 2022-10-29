import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from '../material.module';
import { SesionService } from './services/sesion.service';



@NgModule({
  declarations: [
    InicioComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    SesionService
  ],
  exports:[
    MaterialModule
  ]
})
export class CoreModule { }
