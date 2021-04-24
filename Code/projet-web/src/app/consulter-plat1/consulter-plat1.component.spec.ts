import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPlat1Component } from './consulter-plat1.component';

describe('ConsulterPlat1Component', () => {
  let component: ConsulterPlat1Component;
  let fixture: ComponentFixture<ConsulterPlat1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterPlat1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterPlat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
