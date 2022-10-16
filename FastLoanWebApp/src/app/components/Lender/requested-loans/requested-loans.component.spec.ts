import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedLoansComponent } from './requested-loans.component';

describe('RequestedLoansComponent', () => {
  let component: RequestedLoansComponent;
  let fixture: ComponentFixture<RequestedLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedLoansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestedLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
