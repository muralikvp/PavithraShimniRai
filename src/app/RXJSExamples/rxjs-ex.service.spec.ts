import { TestBed } from '@angular/core/testing';

import { RxjsExService } from './rxjs-ex.service';

describe('RxjsExService', () => {
  let service: RxjsExService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsExService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
