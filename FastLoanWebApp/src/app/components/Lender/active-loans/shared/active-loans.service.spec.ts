import { TestBed } from '@angular/core/testing';

import { ActiveLoansService } from './active-loans.service';

describe('ActiveLoansService', () => {
  let service: ActiveLoansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveLoansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
