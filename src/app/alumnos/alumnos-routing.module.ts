import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { AlumnosModule } from './alumnos.module';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { EliminarAlumnoComponent } from './eliminar-alumno/eliminar-alumno.component';

const routes: Routes = [
  {path:'alumnos-lista', component: AlumnosModule, children:[
    {path:'add-alumno', component: AgregarAlumnoComponent},
    {path:'delete-alumno', component: EliminarAlumnoComponent},
    {path:'edit-alumno', component: EditarAlumnoComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
