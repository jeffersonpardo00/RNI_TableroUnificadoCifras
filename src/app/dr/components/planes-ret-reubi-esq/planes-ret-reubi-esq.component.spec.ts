import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesRetReubiEsqComponent } from './planes-ret-reubi-esq.component';

describe('PlanesRetReubiEsqComponent', () => {
  let component: PlanesRetReubiEsqComponent;
  let fixture: ComponentFixture<PlanesRetReubiEsqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesRetReubiEsqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesRetReubiEsqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
