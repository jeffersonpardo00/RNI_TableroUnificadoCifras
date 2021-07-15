import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqEspAcomFamComponent } from './esq-esp-acom-fam.component';

describe('EsqEspAcomFamComponent', () => {
  let component: EsqEspAcomFamComponent;
  let fixture: ComponentFixture<EsqEspAcomFamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsqEspAcomFamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsqEspAcomFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
