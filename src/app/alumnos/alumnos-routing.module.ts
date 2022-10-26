import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { InicioAlumnosComponent } from './inicio-alumnos/inicio-alumnos.component';
import { TablesComponent } from './lista-alumnos/tables.component';

const routes: Routes = [
  {path:'alumnos', component: InicioAlumnosComponent , children:[
    {path:'lista-alumnos', component: TablesComponent},
    {path:'add-alumno', component: AgregarAlumnoComponent},
    {path:'edit-alumno', component: EditarAlumnoComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
