import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqEspAcomHogaresComponent } from './esq-esp-acom-hogares.component';

describe('EsqEspAcomHogaresComponent', () => {
  let component: EsqEspAcomHogaresComponent;
  let fixture: ComponentFixture<EsqEspAcomHogaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsqEspAcomHogaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsqEspAcomHogaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
