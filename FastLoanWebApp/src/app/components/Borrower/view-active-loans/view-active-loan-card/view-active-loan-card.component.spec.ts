import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActiveLoanCardComponent } from './view-active-loan-card.component';

describe('ViewActiveLoanCardComponent', () => {
  let component: ViewActiveLoanCardComponent;
  let fixture: ComponentFixture<ViewActiveLoanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewActiveLoanCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewActiveLoanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
