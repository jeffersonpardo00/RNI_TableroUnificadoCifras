import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrTutelasComponent } from './pqr-tutelas.component';

describe('PqrTutelasComponent', () => {
  let component: PqrTutelasComponent;
  let fixture: ComponentFixture<PqrTutelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PqrTutelasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PqrTutelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
