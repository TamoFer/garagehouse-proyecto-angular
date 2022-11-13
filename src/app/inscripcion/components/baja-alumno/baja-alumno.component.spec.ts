import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaAlumnoComponent } from './baja-alumno.component';

describe('BajaAlumnoComponent', () => {
  let component: BajaAlumnoComponent;
  let fixture: ComponentFixture<BajaAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
