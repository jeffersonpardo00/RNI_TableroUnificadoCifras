import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegSituaTerritorioComponent } from './seg-situa-territorio.component';

describe('SegSituaTerritorioComponent', () => {
  let component: SegSituaTerritorioComponent;
  let fixture: ComponentFixture<SegSituaTerritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegSituaTerritorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegSituaTerritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
