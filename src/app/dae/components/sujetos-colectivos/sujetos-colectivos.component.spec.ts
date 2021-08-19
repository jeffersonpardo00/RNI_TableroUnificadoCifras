import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetosColectivosComponent } from './sujetos-colectivos.component';

describe('SujetosColectivosComponent', () => {
  let component: SujetosColectivosComponent;
  let fixture: ComponentFixture<SujetosColectivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SujetosColectivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SujetosColectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
