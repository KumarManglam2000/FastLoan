import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveLoansComponent } from './active-loans.component';

describe('ActiveLoansComponent', () => {
  let component: ActiveLoansComponent;
  let fixture: ComponentFixture<ActiveLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveLoansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
