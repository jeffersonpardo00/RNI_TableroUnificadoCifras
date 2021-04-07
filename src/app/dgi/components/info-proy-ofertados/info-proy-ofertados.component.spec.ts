import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProyOfertadosComponent } from './info-proy-ofertados.component';

describe('InfoProyOfertadosComponent', () => {
  let component: InfoProyOfertadosComponent;
  let fixture: ComponentFixture<InfoProyOfertadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoProyOfertadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoProyOfertadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
