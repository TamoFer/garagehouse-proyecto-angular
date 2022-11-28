import { TestBed } from '@angular/core/testing';

import { SnackbarsNotisService } from './snackbars-notis.service';

describe('SnackbarsNotisService', () => {
  let service: SnackbarsNotisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackbarsNotisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
