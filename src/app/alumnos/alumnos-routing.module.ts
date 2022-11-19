import { AutenticacionGuard } from './../core/guards/autenticacion.guard';
import { AdminGuard } from './../core/guards/admin.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { InicioAlumnosComponent } from './components/inicio-alumnos/inicio-alumnos.component';
import { TablesComponent } from './components/lista-alumnos/tables.component';

export const routes: Routes = [
  {path:'alumnos', component: InicioAlumnosComponent ,canActivate:[AutenticacionGuard], children:[
    {path:'lista-alumnos', component: TablesComponent, canActivate:[AutenticacionGuard]},
    {path:'add-alumno', component: AgregarAlumnoComponent, canActivate:[AdminGuard]},
    {path:'edit-alumno', component: EditarAlumnoComponent, canActivate:[AdminGuard]},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
