import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterConsultComponent } from './footer-consult.component';

describe('FooterConsultComponent', () => {
  let component: FooterConsultComponent;
  let fixture: ComponentFixture<FooterConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
