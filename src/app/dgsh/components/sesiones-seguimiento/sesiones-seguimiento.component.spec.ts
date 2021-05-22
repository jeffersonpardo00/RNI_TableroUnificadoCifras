import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesSeguimientoComponent } from './sesiones-seguimiento.component';

describe('SesionesSeguimientoComponent', () => {
  let component: SesionesSeguimientoComponent;
  let fixture: ComponentFixture<SesionesSeguimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionesSeguimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionesSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
