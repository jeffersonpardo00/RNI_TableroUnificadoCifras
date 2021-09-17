import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegMedidaIndemColectivaComponent } from './seg-medida-indem-colectiva.component';

describe('SegMedidaIndemColectivaComponent', () => {
  let component: SegMedidaIndemColectivaComponent;
  let fixture: ComponentFixture<SegMedidaIndemColectivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegMedidaIndemColectivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegMedidaIndemColectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
