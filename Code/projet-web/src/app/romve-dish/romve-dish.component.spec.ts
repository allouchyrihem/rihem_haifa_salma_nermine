import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomveDishComponent } from './romve-dish.component';

describe('RomveDishComponent', () => {
  let component: RomveDishComponent;
  let fixture: ComponentFixture<RomveDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomveDishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomveDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
