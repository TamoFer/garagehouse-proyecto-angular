import { NgModule } from '@angular/core';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: '', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
