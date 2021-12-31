import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsvComponent } from './ssv.component';

describe('SsvComponent', () => {
  let component: SsvComponent;
  let fixture: ComponentFixture<SsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
