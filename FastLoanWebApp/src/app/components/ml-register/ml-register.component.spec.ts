import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlRegisterComponent } from './ml-register.component';

describe('MlRegisterComponent', () => {
  let component: MlRegisterComponent;
  let fixture: ComponentFixture<MlRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
