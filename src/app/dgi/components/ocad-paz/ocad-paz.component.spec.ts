import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcadPazComponent } from './ocad-paz.component';

describe('OcadPazComponent', () => {
  let component: OcadPazComponent;
  let fixture: ComponentFixture<OcadPazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcadPazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcadPazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
