import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';

import { TablesComponent } from './tables.component';

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablesComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MaterialModule,
        HttpClientModule,
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Al accionar boton vaciar en la seccion de busqueda de alumnos por curso, borra los caracteres ingresados para la busqueda',
  ()=> {
    const formulario = component.busquedaEnTabla;
    const boton = fixture.debugElement.query(By.css('#borrarCampoCurso'));
    const curso= formulario.controls['curso'];

    curso.setValue('angular');
    boton.nativeElement.click();
    fixture.detectChanges();

    expect(curso.value).toBeNull()

  });

  it('Al accionar boton vaciar en la seccion de busqueda de alumnos por apellido, borra los caracteres ingresados para la busqueda',
  ()=> {
    const formulario = component.busquedaEnTabla;
    const boton = fixture.debugElement.query(By.css('#borrarCampoApellido'));
    const curso= formulario.controls['apellido'];

    curso.setValue('martinez');
    boton.nativeElement.click();
    fixture.detectChanges();

    expect(curso.value).toBeNull()

  });

  // it('busqueda por apellido', () => {
  //   const formulario = component.busquedaEnTabla;
  //   const curso= formulario.controls['apellido'];
  //   const boton=fixture.debugElement.query(By.css('#buscarXApellido'))
  //   const contenido=fixture.debugElement.query(By.css('#tablaDatos'))

  //   const lista= component.lista= [
  //     { "nombre": "Tamia", "apellido": "McDermott", "correo": "Sammy_Lubowitz@gmail.com", "cursoActual": { "nombre": "Security", "profesor": "Robin Rosenbaum", "finicio": "2022-10-30T07:17:50.501Z", "ftermino": "2023-03-08T03:39:58.362Z", "descripcion": "descripcion 3", "disponibilidad": true, "img": "http://loremflickr.com/640/480/technics", "id": "3", }, "idAlumno": "1" }, { "nombre": "Ryley", "apellido": "Kovacek", "correo": "Madalyn79@gmail.com", "cursoActual": { "nombre": "Security", "profesor": "Robin Rosenbaum", "finicio": "2022-10-30T07:17:50.501Z", "ftermino": "2023-03-08T03:39:58.362Z", "descripcion": "descripcion 3", "disponibilidad": true, "img": "http://loremflickr.com/640/480/technics", "id": "3", }, "idAlumno": "2" }
  //   ];

  //   let data= new MatTableDataSource<[
  //     { "nombre": "Tamia", "apellido": "McDermott", "correo": "Sammy_Lubowitz@gmail.com", "cursoActual": { "nombre": "Security", "profesor": "Robin Rosenbaum", "finicio": "2022-10-30T07:17:50.501Z", "ftermino": "2023-03-08T03:39:58.362Z", "descripcion": "descripcion 3", "disponibilidad": true, "img": "http://loremflickr.com/640/480/technics", "id": "3" }, "idAlumno": "1" }, { "nombre": "Ryley", "apellido": "Kovacek", "correo": "Madalyn79@gmail.com", "cursoActual": { "nombre": "Security", "profesor": "Robin Rosenbaum", "finicio": "2022-10-30T07:17:50.501Z", "ftermino": "2023-03-08T03:39:58.362Z", "descripcion": "descripcion 3", "disponibilidad": true, "img": "http://loremflickr.com/640/480/technics", "id": "3" }, "idAlumno": "2" }
  //   ]>();

  //   console.log(contenido.nativeElement);


  //   curso.setValue('MCDERMOTT')
  //   boton.nativeElement.click()

    //hasta aca pude logicar, mas no
  // });




});
