import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaCursoComponent } from './baja-curso.component';

describe('BajaCursoComponent', () => {
  let component: BajaCursoComponent;
  let fixture: ComponentFixture<BajaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
