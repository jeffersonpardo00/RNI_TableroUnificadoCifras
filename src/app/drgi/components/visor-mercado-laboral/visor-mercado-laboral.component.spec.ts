import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorMercadoLaboralComponent } from './visor-mercado-laboral.component';

describe('VisorMercadoLaboralComponent', () => {
  let component: VisorMercadoLaboralComponent;
  let fixture: ComponentFixture<VisorMercadoLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisorMercadoLaboralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorMercadoLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
