import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoanOfferComponent } from './create-loan-offer.component';

describe('CreateLoanOfferComponent', () => {
  let component: CreateLoanOfferComponent;
  let fixture: ComponentFixture<CreateLoanOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLoanOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLoanOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
