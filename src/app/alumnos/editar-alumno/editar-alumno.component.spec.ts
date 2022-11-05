import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

import { EditarAlumnoComponent } from './editar-alumno.component';

describe('EditarAlumnoComponent', () => {
  let component: EditarAlumnoComponent;
  let fixture: ComponentFixture<EditarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAlumnoComponent ],
      imports:[
        BrowserAnimationsModule,
        HttpClientTestingModule,
        HttpClientModule,
        MaterialModule
      ],
      providers:
      [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: {id: '24fkzrw3487943uf358lovd'}}
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
