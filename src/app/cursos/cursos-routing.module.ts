import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { CardsComponent } from './cards/cards.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { EliminarCursoComponent } from './eliminar-curso/eliminar-curso.component';

const routes: Routes = [
  {path:'cursos', component: CardsComponent, children:[
    {path:'cursos/agregar-curso', component: AgregarCursoComponent},
    {path:'cursos/eliminar-curso', component: EliminarCursoComponent},
    {path:'cursos/editar-curso', component: EditarCursoComponent},

  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
