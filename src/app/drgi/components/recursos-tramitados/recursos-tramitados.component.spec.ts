import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosTramitadosComponent } from './recursos-tramitados.component';

describe('RecursosTramitadosComponent', () => {
  let component: RecursosTramitadosComponent;
  let fixture: ComponentFixture<RecursosTramitadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursosTramitadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosTramitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
