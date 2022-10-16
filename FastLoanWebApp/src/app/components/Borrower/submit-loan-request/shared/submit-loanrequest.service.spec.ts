import { TestBed } from '@angular/core/testing';

import { SubmitLoanrequestService } from './submit-loanrequest.service';

describe('SubmitLoanrequestService', () => {
  let service: SubmitLoanrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitLoanrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
