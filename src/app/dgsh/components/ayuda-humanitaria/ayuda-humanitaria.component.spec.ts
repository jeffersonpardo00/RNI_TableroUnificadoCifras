import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaHumanitariaComponent } from './ayuda-humanitaria.component';

describe('AyudaHumanitariaComponent', () => {
  let component: AyudaHumanitariaComponent;
  let fixture: ComponentFixture<AyudaHumanitariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaHumanitariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaHumanitariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
