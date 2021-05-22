import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetornosReubicacionesComponent } from './retornos-reubicaciones.component';

describe('RetornosReubicacionesComponent', () => {
  let component: RetornosReubicacionesComponent;
  let fixture: ComponentFixture<RetornosReubicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetornosReubicacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetornosReubicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
