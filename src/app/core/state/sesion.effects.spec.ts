import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SesionEffects } from './sesion.effects';

describe('SesionEffects', () => {
  let actions$: Observable<any>;
  let effects: SesionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SesionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SesionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
