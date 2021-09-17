import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisMercadoLaboralComponent } from './vis-mercado-laboral.component';

describe('VisMercadoLaboralComponent', () => {
  let component: VisMercadoLaboralComponent;
  let fixture: ComponentFixture<VisMercadoLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisMercadoLaboralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisMercadoLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
