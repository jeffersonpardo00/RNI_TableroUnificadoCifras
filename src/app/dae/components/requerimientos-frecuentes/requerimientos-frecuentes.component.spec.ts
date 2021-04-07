import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimientosFrecuentesComponent } from './requerimientos-frecuentes.component';

describe('RequerimientosFrecuentesComponent', () => {
  let component: RequerimientosFrecuentesComponent;
  let fixture: ComponentFixture<RequerimientosFrecuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequerimientosFrecuentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequerimientosFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
