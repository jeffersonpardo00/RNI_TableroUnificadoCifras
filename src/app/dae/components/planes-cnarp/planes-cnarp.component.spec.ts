import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesCnarpComponent } from './planes-cnarp.component';

describe('PlanesCnarpComponent', () => {
  let component: PlanesCnarpComponent;
  let fixture: ComponentFixture<PlanesCnarpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesCnarpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesCnarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
