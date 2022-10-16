import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActiveLoansComponent } from './view-active-loans.component';

describe('ViewActiveLoansComponent', () => {
  let component: ViewActiveLoansComponent;
  let fixture: ComponentFixture<ViewActiveLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewActiveLoansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewActiveLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
