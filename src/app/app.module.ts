import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './proyecto-cursos/menu/menu.component';
import { NavbarComponent } from './proyecto-cursos/navbar/navbar.component';
import { ContenidoComponent } from './proyecto-cursos/contenido/contenido.component';
import { AlumnosComponent } from './proyecto-cursos/alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    ContenidoComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
