import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciasTecnicasComponent } from './asistencias-tecnicas.component';

describe('AsistenciasTecnicasComponent', () => {
  let component: AsistenciasTecnicasComponent;
  let fixture: ComponentFixture<AsistenciasTecnicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenciasTecnicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciasTecnicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
