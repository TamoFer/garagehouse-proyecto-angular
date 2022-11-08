import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';

import { TablesComponent } from './tables.component';

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesComponent ],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MaterialModule,
        HttpClientModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('buscar apellido devuelve un valor aunque este en mayuscula el apellido', () => {
    const formulario= component.busquedaEnTabla;
    const apellido=formulario.controls['apellido'];
    const boton=fixture.debugElement.query(By.css('#buscarApellido'));

    apellido.setValue('KOVACEK');
    boton.nativeElement.click()
    fixture.detectChanges()



  });


});
