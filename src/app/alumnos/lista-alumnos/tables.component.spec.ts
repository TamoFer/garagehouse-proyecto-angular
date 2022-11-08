import { Alumnos } from './../../models/alumnos';
import { ListaAlumnosService } from './../services/lista-alumnos.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';

import { TablesComponent } from './tables.component';

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;
  let service: ListaAlumnosService;
  // let httpClientSpy: { get: jasmine.Spy };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablesComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MaterialModule,
        HttpClientModule,
      ],
      providers:[ListaAlumnosService]

    }).compileComponents();

    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(ListaAlumnosService)
    fixture = TestBed.createComponent(TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('buscar apellido devuelve un valor aunque este en mayuscula el apellido',
  ()=> {
    const formulario = component.busquedaEnTabla;
    const apellido = formulario.controls['apellido'];
    const boton = fixture.debugElement.query(By.css('#buscarApellido'));

    // const mockDatos = [
    //   {"nombre":"Tamia","apellido":"McDermott","correo":"Sammy_Lubowitz@gmail.com","cursoActual":{"nombre":"Security","profesor":"Robin Rosenbaum","finicio":"2022-10-30T07:17:50.501Z","ftermino":"2023-03-08T03:39:58.362Z","descripcion":"descripcion 3","disponibilidad":true,"img":"http://loremflickr.com/640/480/technics","id":"3"},"idAlumno":"1"},{"nombre":"Ryley","apellido":"Kovacek","correo":"Madalyn79@gmail.com","cursoActual":{"nombre":"Security","profesor":"Robin Rosenbaum","finicio":"2022-10-30T07:17:50.501Z","ftermino":"2023-03-08T03:39:58.362Z","descripcion":"descripcion 3","disponibilidad":true,"img":"http://loremflickr.com/640/480/technics","id":"3"},"idAlumno":"2"},{"nombre":"Alivia","apellido":"Veum","correo":"Darius.Klocko19@gmail.com","cursoActual":{"nombre":"Implementation","profesor":"Malcolm Stoltenberg","finicio":"2022-10-30T08:10:50.238Z","ftermino":"2023-02-18T11:35:28.071Z","descripcion":"descripcion 4","disponibilidad":true,"img":"http://loremflickr.com/640/480/technics","id":"4"},"idAlumno":"3"},{"nombre":"Brenden","apellido":"Donnelly","correo":"Dan68@hotmail.com","cursoActual":{"nombre":"Communications","profesor":"Levi Grady","finicio":"2022-10-30T16:35:39.320Z","ftermino":"2023-07-24T14:02:16.854Z","descripcion":"descripcion 5","disponibilidad":true,"img":"http://loremflickr.com/640/480/technics","id":"5"},"idAlumno":"4"},{"nombre":"Isaiah","apellido":"Pollich","correo":"Nick39@hotmail.com","cursoActual":{"nombre":"Brand","profesor":"Erika Emard","finicio":"2022-10-31T04:10:53.327Z","ftermino":"2023-09-14T02:36:38.333Z","descripcion":"descripcion 1","disponibilidad":false,"img":"http://loremflickr.com/640/480/technics","id":"1"},"idAlumno":"5"}
    // ];

    // httpClientSpy.get.and.returnValue(of(mockDatos));
    apellido.setValue('KOVACEK');
    boton.nativeElement.click()
    fixture.detectChanges()
    let resultado:Alumnos;

    service.obtenerAlumnos().subscribe((datos)=>{
      console.log(datos);
      // resultado=datos
    })
    // console.log(resultado);




  });


});
