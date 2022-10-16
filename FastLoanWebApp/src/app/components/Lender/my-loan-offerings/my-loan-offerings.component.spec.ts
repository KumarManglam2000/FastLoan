import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLoanOfferingsComponent } from './my-loan-offerings.component';

describe('MyLoanOfferingsComponent', () => {
  let component: MyLoanOfferingsComponent;
  let fixture: ComponentFixture<MyLoanOfferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLoanOfferingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLoanOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
