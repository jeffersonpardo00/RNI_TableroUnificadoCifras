import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceAccesoEfectivoComponent } from './balance-acceso-efectivo.component';

describe('BalanceAccesoEfectivoComponent', () => {
  let component: BalanceAccesoEfectivoComponent;
  let fixture: ComponentFixture<BalanceAccesoEfectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceAccesoEfectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceAccesoEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
