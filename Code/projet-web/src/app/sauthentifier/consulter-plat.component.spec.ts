import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPlatComponent } from './consulter-plat.component';

describe('ConsulterPlatComponent', () => {
  let component: ConsulterPlatComponent;
  let fixture: ComponentFixture<ConsulterPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
