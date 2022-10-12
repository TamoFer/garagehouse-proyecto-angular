import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from "@angular/material/select";
import { BrowserModule } from "@angular/platform-browser";
import { AgregarAlumnoComponent } from './components/dialogs/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './components/dialogs/editar-alumno/editar-alumno.component';
import { InscribirAlumnoComponent } from './components/dialogs/inscribir-alumno/inscribir-alumno.component';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        BrowserModule

    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule

    ],
    declarations: [
      AgregarAlumnoComponent,
      EditarAlumnoComponent,
      InscribirAlumnoComponent
    ]
})
export class MaterialModule {}
