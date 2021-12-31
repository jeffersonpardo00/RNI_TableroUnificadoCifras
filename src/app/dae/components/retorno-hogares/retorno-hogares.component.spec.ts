import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetornoHogaresComponent } from './retorno-hogares.component';

describe('RetornoHogaresComponent', () => {
  let component: RetornoHogaresComponent;
  let fixture: ComponentFixture<RetornoHogaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetornoHogaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetornoHogaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
