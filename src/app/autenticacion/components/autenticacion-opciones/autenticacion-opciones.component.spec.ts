import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacionOpcionesComponent } from './autenticacion-opciones.component';

describe('AutenticacionOpcionesComponent', () => {
  let component: AutenticacionOpcionesComponent;
  let fixture: ComponentFixture<AutenticacionOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutenticacionOpcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutenticacionOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
