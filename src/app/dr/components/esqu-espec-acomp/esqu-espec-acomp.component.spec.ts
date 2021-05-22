import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquEspecAcompComponent } from './esqu-espec-acomp.component';

describe('EsquEspecAcompComponent', () => {
  let component: EsquEspecAcompComponent;
  let fixture: ComponentFixture<EsquEspecAcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsquEspecAcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsquEspecAcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
