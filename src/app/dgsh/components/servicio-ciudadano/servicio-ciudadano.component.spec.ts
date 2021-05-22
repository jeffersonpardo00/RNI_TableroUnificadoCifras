import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioCiudadanoComponent } from './servicio-ciudadano.component';

describe('ServicioCiudadanoComponent', () => {
  let component: ServicioCiudadanoComponent;
  let fixture: ComponentFixture<ServicioCiudadanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioCiudadanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioCiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
