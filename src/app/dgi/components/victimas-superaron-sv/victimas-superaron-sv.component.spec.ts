import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimasSuperaronSVComponent } from './victimas-superaron-sv.component';

describe('VictimasSuperaronSVComponent', () => {
  let component: VictimasSuperaronSVComponent;
  let fixture: ComponentFixture<VictimasSuperaronSVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictimasSuperaronSVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimasSuperaronSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
