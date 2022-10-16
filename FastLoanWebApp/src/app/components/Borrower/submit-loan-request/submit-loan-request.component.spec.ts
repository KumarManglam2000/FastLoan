import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitLoanRequestComponent } from './submit-loan-request.component';

describe('SubmitLoanRequestComponent', () => {
  let component: SubmitLoanRequestComponent;
  let fixture: ComponentFixture<SubmitLoanRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitLoanRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitLoanRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
