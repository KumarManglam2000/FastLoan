import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbRegisterComponent } from './mb-register.component';

describe('MbRegisterComponent', () => {
  let component: MbRegisterComponent;
  let fixture: ComponentFixture<MbRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
