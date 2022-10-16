import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLoanOfferComponent } from './search-loan-offer.component';

describe('SearchLoanOfferComponent', () => {
  let component: SearchLoanOfferComponent;
  let fixture: ComponentFixture<SearchLoanOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLoanOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLoanOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
