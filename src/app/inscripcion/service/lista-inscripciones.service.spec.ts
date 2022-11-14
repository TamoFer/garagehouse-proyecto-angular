import { TestBed } from '@angular/core/testing';

import { ListaInscripcionesService } from './lista-inscripciones.service';

describe('ListaInscripcionesService', () => {
  let service: ListaInscripcionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaInscripcionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
