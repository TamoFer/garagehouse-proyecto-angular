import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';

import { AgregarAlumnoComponent } from './agregar-alumno.component';

describe('AgregarAlumnoComponent', () => {
  let component: AgregarAlumnoComponent;
  let fixture: ComponentFixture<AgregarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlumnoComponent ],
      imports:[
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene invalido si no se ingresan todos los datos del mismo', () => {
    const formulario = component.alumnoNuevo;
    const nombre=formulario.controls['nombre'];
    const apellido=formulario.controls['apellido'];
    const curso=formulario.controls['curso'];

    nombre.setValue('Pedro');
    apellido.setValue('Gomez');
    curso.setValue('');

    expect(formulario.invalid).toBeTruthy();

  })

  it('El formulario es valido si tiene todos los datos del mismo', () => {
    const formulario = component.alumnoNuevo;
    const nombre=formulario.controls['nombre'];
    const apellido=formulario.controls['apellido'];
    const correo=formulario.controls['correo'];
    const curso=formulario.controls['curso'];

    nombre.setValue('Pedro');
    apellido.setValue('Gomez');
    correo.setValue('pedro@gomez.com');
    curso.setValue('Communications');

    expect(formulario.valid).toBeTrue();

  })

  it('No se habilita boton hasta que los campos del formulario esten completos', () => {
    const boton = fixture.debugElement.query(By.css('#btnAgregar'))
    const formulario = component.alumnoNuevo;
    const nombre=formulario.controls['nombre'];
    const apellido=formulario.controls['apellido'];
    const correo=formulario.controls['correo'];
    const curso=formulario.controls['curso'];

    nombre.setValue('Pedro');
    apellido.setValue('Gomez');
    correo.setValue('pedro@gomez.com');
    curso.setValue('');
    expect(boton.nativeElement.disabled).toBeTruthy()
  })

  it('Se habilita el boton agregar alumno al completar todos los campos del formulario', () => {
    const boton = fixture.debugElement.query(By.css('#btnAgregar'));
    const formulario = component.alumnoNuevo;
    const nombre=formulario.controls['nombre'];
    const apellido=formulario.controls['apellido'];
    const correo=formulario.controls['correo'];
    const curso=formulario.controls['curso'];

    nombre.setValue('Pedro');
    apellido.setValue('Gomez');
    correo.setValue('pedro@gomez.com');
    curso.setValue('Communications');
    expect(boton.nativeElement.disabled.value).toBeFalsy()
  })

});
