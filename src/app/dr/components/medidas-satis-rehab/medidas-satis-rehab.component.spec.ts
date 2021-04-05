import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasSatisRehabComponent } from './medidas-satis-rehab.component';

describe('MedidasSatisRehabComponent', () => {
  let component: MedidasSatisRehabComponent;
  let fixture: ComponentFixture<MedidasSatisRehabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedidasSatisRehabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidasSatisRehabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
