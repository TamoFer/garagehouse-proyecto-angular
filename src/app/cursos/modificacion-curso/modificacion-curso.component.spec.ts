import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionCursoComponent } from './modificacion-curso.component';

describe('ModificacionCursoComponent', () => {
  let component: ModificacionCursoComponent;
  let fixture: ComponentFixture<ModificacionCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificacionCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificacionCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
