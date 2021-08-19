import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRetornoComponent } from './plan-retorno.component';

describe('PlanRetornoComponent', () => {
  let component: PlanRetornoComponent;
  let fixture: ComponentFixture<PlanRetornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanRetornoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanRetornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
