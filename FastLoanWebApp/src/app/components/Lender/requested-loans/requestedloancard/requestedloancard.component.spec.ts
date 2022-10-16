import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedloancardComponent } from './requestedloancard.component';

describe('RequestedloancardComponent', () => {
  let component: RequestedloancardComponent;
  let fixture: ComponentFixture<RequestedloancardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedloancardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestedloancardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
