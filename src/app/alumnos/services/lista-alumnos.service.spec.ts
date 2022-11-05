import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ListaAlumnosService } from './lista-alumnos.service';

describe('ListaAlumnosService', () => {
  let service: ListaAlumnosService;
  let httpClientSpy: { get: jasmine.Spy };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]

    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ListaAlumnosService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
