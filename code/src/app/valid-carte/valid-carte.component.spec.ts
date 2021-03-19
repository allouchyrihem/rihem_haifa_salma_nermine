import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidCarteComponent } from './valid-carte.component';

describe('ValidCarteComponent', () => {
  let component: ValidCarteComponent;
  let fixture: ComponentFixture<ValidCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidCarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
