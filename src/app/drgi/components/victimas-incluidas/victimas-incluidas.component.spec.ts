import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimasIncluidasComponent } from './victimas-incluidas.component';

describe('VictimasIncluidasComponent', () => {
  let component: VictimasIncluidasComponent;
  let fixture: ComponentFixture<VictimasIncluidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictimasIncluidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimasIncluidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
