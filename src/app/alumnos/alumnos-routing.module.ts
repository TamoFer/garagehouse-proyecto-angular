import { ProfesorGuard } from './../core/guards/profesor.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { InicioAlumnosComponent } from './components/inicio-alumnos/inicio-alumnos.component';
import { TablesComponent } from './components/lista-alumnos/tables.component';

export const routes: Routes = [
  {path:'alumnos', component: InicioAlumnosComponent , children:[
    {path:'lista-alumnos', component: TablesComponent, canActivate:[ProfesorGuard]},
    {path:'add-alumno', component: AgregarAlumnoComponent, canActivate:[ProfesorGuard]},
    {path:'edit-alumno', component: EditarAlumnoComponent, canActivate:[ProfesorGuard]},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
