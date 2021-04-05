import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaHumanitariaComponent } from './asistencia-humanitaria.component';

describe('AsistenciaHumanitariaComponent', () => {
  let component: AsistenciaHumanitariaComponent;
  let fixture: ComponentFixture<AsistenciaHumanitariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenciaHumanitariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaHumanitariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
