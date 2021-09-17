import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanadosComponent } from './acompanados.component';

describe('AcompanadosComponent', () => {
  let component: AcompanadosComponent;
  let fixture: ComponentFixture<AcompanadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcompanadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
