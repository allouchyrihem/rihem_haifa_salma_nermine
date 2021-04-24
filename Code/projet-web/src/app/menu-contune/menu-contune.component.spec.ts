import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuContuneComponent } from './menu-contune.component';

describe('MenuContuneComponent', () => {
  let component: MenuContuneComponent;
  let fixture: ComponentFixture<MenuContuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuContuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuContuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
