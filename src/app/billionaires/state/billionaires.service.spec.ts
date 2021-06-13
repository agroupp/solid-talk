import { TestBed } from '@angular/core/testing';

import { BillionairesService } from './billionaires.service';

describe('BillionairesService', () => {
  let service: BillionairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillionairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
