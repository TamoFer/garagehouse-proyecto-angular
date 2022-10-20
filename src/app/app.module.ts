import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { config, token } from './config';
import { TablesComponent } from './components/tables/tables.component';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsComponent } from './components/components.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './components/cards/cards.component';
import { SizesTitulosDirective } from './directives/sizes-titulos.directive';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    ComponentsComponent,
    CardsComponent,
    TablesComponent,
    NombreApellidoPipe,
    SizesTitulosDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,

  ],
  providers: [
    {provide:token, useValue:config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
