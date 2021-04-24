import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServecComponent } from './servec.component';

describe('ServecComponent', () => {
  let component: ServecComponent;
  let fixture: ComponentFixture<ServecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
