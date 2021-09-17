import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegSitTerritorioComponent } from './seg-sit-territorio.component';

describe('SegSitTerritorioComponent', () => {
  let component: SegSitTerritorioComponent;
  let fixture: ComponentFixture<SegSitTerritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegSitTerritorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegSitTerritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
