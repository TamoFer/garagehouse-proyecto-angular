import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InscripcionEffects } from './inscripcion.effects';

describe('InscripcionEffects', () => {
  let actions$: Observable<any>;
  let effects: InscripcionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InscripcionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(InscripcionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
