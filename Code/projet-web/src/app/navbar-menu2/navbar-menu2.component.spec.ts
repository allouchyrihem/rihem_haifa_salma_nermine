import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMenu2Component } from './navbar-menu2.component';

describe('NavbarMenu2Component', () => {
  let component: NavbarMenu2Component;
  let fixture: ComponentFixture<NavbarMenu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMenu2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
