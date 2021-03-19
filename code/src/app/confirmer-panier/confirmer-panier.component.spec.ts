import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmerPanierComponent } from './confirmer-panier.component';

describe('ConfirmerPanierComponent', () => {
  let component: ConfirmerPanierComponent;
  let fixture: ComponentFixture<ConfirmerPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmerPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmerPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
