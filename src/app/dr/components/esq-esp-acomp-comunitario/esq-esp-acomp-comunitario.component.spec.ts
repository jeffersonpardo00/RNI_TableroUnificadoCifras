import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqEspAcompComunitarioComponent } from './esq-esp-acomp-comunitario.component';

describe('EsqEspAcompComunitarioComponent', () => {
  let component: EsqEspAcompComunitarioComponent;
  let fixture: ComponentFixture<EsqEspAcompComunitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsqEspAcompComunitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsqEspAcompComunitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
