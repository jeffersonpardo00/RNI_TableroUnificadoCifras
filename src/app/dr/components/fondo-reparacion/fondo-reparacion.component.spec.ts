import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoReparacionComponent } from './fondo-reparacion.component';

describe('FondoReparacionComponent', () => {
  let component: FondoReparacionComponent;
  let fixture: ComponentFixture<FondoReparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondoReparacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
