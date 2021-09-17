import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorIgedComponent } from './visor-iged.component';

describe('VisorIgedComponent', () => {
  let component: VisorIgedComponent;
  let fixture: ComponentFixture<VisorIgedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisorIgedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorIgedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
