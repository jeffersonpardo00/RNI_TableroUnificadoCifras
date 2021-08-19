import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAcompanadosComponent } from './reporte-acompanados.component';

describe('ReporteAcompanadosComponent', () => {
  let component: ReporteAcompanadosComponent;
  let fixture: ComponentFixture<ReporteAcompanadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteAcompanadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteAcompanadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
