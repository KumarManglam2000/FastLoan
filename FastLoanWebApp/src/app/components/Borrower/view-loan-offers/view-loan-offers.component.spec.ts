import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanOffersComponent } from './view-loan-offers.component';

describe('ViewLoanOffersComponent', () => {
  let component: ViewLoanOffersComponent;
  let fixture: ComponentFixture<ViewLoanOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLoanOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLoanOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
