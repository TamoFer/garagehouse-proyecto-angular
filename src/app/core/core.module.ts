import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from '../material.module';
import { SesionService } from './services/sesion.service';
import { StoreModule } from '@ngrx/store';
import { reducer, sesionFeatureKey } from './state/sesion.reducer';



@NgModule({
  declarations: [
    InicioComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forFeature(sesionFeatureKey, reducer)
  ],
  providers: [
    SesionService
  ],
  exports:[
    MaterialModule
  ]
})
export class CoreModule { }
