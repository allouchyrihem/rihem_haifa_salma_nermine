import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDishComponent } from './menu-dish.component';

describe('MenuDishComponent', () => {
  let component: MenuDishComponent;
  let fixture: ComponentFixture<MenuDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
