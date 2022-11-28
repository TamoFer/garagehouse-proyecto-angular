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
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';

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
        MatToolbarModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatExpansionModule,
        MatTooltipModule,
        MatSnackBarModule


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
        MatSelectModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatExpansionModule,
        MatTooltipModule,
        MatSnackBarModule
    ],
    declarations: [
    ]
})
export class MaterialModule {}
