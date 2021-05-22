import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosRegionalesComponent } from './centros-regionales.component';

describe('CentrosRegionalesComponent', () => {
  let component: CentrosRegionalesComponent;
  let fixture: ComponentFixture<CentrosRegionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrosRegionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosRegionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
