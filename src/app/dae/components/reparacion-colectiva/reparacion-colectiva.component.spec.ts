import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparacionColectivaComponent } from './reparacion-colectiva.component';

describe('ReparacionColectivaComponent', () => {
  let component: ReparacionColectivaComponent;
  let fixture: ComponentFixture<ReparacionColectivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparacionColectivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparacionColectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
