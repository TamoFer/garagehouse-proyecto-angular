import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionAlumnoComponent } from './modificacion-alumno.component';

describe('ModificacionAlumnoComponent', () => {
  let component: ModificacionAlumnoComponent;
  let fixture: ComponentFixture<ModificacionAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificacionAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificacionAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
