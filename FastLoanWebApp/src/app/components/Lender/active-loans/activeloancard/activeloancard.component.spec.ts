import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveloancardComponent } from './activeloancard.component';

describe('ActiveloancardComponent', () => {
  let component: ActiveloancardComponent;
  let fixture: ComponentFixture<ActiveloancardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveloancardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveloancardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
