import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasSatisfaccionComponent } from './medidas-satisfaccion.component';

describe('MedidasSatisfaccionComponent', () => {
  let component: MedidasSatisfaccionComponent;
  let fixture: ComponentFixture<MedidasSatisfaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedidasSatisfaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidasSatisfaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
