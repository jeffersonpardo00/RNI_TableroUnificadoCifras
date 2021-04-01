import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosMasivosComponent } from './eventos-masivos.component';

describe('EventosMasivosComponent', () => {
  let component: EventosMasivosComponent;
  let fixture: ComponentFixture<EventosMasivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosMasivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosMasivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
