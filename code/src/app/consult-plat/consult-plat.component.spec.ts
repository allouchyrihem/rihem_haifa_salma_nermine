import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultPlatComponent } from './consult-plat.component';

describe('ConsultPlatComponent', () => {
  let component: ConsultPlatComponent;
  let fixture: ComponentFixture<ConsultPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
