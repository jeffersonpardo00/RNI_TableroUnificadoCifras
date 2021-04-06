import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInterinstitucionalComponent } from './gestion-interinstitucional.component';

describe('GestionInterinstitucionalComponent', () => {
  let component: GestionInterinstitucionalComponent;
  let fixture: ComponentFixture<GestionInterinstitucionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionInterinstitucionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInterinstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
