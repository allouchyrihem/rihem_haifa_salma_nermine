import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSladeComponent } from './menu-slade.component';

describe('MenuSladeComponent', () => {
  let component: MenuSladeComponent;
  let fixture: ComponentFixture<MenuSladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSladeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
