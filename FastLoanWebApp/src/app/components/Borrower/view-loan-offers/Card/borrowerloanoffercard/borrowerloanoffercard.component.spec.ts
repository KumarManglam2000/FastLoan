import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerloanoffercardComponent } from './borrowerloanoffercard.component';

describe('BorrowerloanoffercardComponent', () => {
  let component: BorrowerloanoffercardComponent;
  let fixture: ComponentFixture<BorrowerloanoffercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowerloanoffercardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowerloanoffercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
