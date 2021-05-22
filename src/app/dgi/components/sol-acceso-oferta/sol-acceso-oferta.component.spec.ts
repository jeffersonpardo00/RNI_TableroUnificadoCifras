import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolAccesoOfertaComponent } from './sol-acceso-oferta.component';

describe('SolAccesoOfertaComponent', () => {
  let component: SolAccesoOfertaComponent;
  let fixture: ComponentFixture<SolAccesoOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolAccesoOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolAccesoOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
