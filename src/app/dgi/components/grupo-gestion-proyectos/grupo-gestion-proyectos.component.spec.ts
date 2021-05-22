import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoGestionProyectosComponent } from './grupo-gestion-proyectos.component';

describe('GrupoGestionProyectosComponent', () => {
  let component: GrupoGestionProyectosComponent;
  let fixture: ComponentFixture<GrupoGestionProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoGestionProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoGestionProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
