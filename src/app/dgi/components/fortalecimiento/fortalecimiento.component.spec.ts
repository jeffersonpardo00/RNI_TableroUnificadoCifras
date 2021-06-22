import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortalecimientoComponent } from './fortalecimiento.component';

describe('FortalecimientoComponent', () => {
  let component: FortalecimientoComponent;
  let fixture: ComponentFixture<FortalecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortalecimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortalecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
