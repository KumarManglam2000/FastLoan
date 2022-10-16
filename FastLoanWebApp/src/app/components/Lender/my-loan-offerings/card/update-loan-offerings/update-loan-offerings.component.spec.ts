import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoanOfferingsComponent } from './update-loan-offerings.component';

describe('UpdateLoanOfferingsComponent', () => {
  let component: UpdateLoanOfferingsComponent;
  let fixture: ComponentFixture<UpdateLoanOfferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLoanOfferingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLoanOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
