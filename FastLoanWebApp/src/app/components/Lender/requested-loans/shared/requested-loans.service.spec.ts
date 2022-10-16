import { TestBed } from '@angular/core/testing';

import { RequestedLoansService } from './requested-loans.service';

describe('RequestedLoansService', () => {
  let service: RequestedLoansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestedLoansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
