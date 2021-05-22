import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnarivComponent } from './snariv.component';

describe('SnarivComponent', () => {
  let component: SnarivComponent;
  let fixture: ComponentFixture<SnarivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnarivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnarivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
