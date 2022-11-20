import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MenuComponent} from './core/components/menu-lateral/menu/menu.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@NgModule({
    declarations: [
      MenuComponent,
      ToolbarComponent,
      AppComponent
    ],
    providers: [
      {
        provide: MatDialogRef,
        useValue: {}
      },
      {
        provide: MAT_DIALOG_DATA,
        useValue: {}
      },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        SharedModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([]),
    ]
})
export class AppModule{}
