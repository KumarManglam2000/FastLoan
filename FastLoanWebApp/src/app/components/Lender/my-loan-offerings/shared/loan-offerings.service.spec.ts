import { TestBed } from '@angular/core/testing';

import { LoanOfferingsService } from './loan-offerings.service';

describe('LoanOfferingsService', () => {
  let service: LoanOfferingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanOfferingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
