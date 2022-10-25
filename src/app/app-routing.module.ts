import { TablesComponent } from './alumnos/lista-alumnos/tables.component';
import { NgModule } from '@angular/core';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsComponent } from './cursos/cards/cards.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'alumnos/lista-alumnos', component: TablesComponent },
  { path: 'cursos', component: CardsComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: '', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
