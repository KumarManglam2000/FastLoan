import { TestBed } from '@angular/core/testing';

import { CreateLoanOfferService } from './create-loan-offer.service';

describe('CreateLoanOfferService', () => {
  let service: CreateLoanOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateLoanOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
