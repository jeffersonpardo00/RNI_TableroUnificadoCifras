import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionInmediatezComponent } from './atencion-inmediatez.component';

describe('AtencionInmediatezComponent', () => {
  let component: AtencionInmediatezComponent;
  let fixture: ComponentFixture<AtencionInmediatezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtencionInmediatezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionInmediatezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
