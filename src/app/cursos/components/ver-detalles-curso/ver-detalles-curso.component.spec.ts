import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetallesComponentCurso } from './ver-detalles-curso.component';

describe('VerDetallesComponentCurso', () => {
  let component: VerDetallesComponentCurso;
  let fixture: ComponentFixture<VerDetallesComponentCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDetallesComponentCurso ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDetallesComponentCurso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
