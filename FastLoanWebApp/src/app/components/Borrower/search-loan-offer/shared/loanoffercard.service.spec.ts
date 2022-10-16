import { TestBed } from '@angular/core/testing';

import { LoanoffercardService } from './loanoffercard.service';

describe('LoanoffercardService', () => {
  let service: LoanoffercardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanoffercardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
