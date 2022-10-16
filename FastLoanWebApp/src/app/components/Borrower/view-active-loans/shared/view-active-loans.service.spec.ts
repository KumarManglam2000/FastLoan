import { TestBed } from '@angular/core/testing';

import { ViewActiveLoansService } from './view-active-loans.service';

describe('ViewActiveLoansService', () => {
  let service: ViewActiveLoansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewActiveLoansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
