import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadasFortalecimientoComponent } from './jornadas-fortalecimiento.component';

describe('JornadasFortalecimientoComponent', () => {
  let component: JornadasFortalecimientoComponent;
  let fixture: ComponentFixture<JornadasFortalecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JornadasFortalecimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JornadasFortalecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
