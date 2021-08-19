import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetosEtnicosRegistroComponent } from './sujetos-etnicos-registro.component';

describe('SujetosEtnicosRegistroComponent', () => {
  let component: SujetosEtnicosRegistroComponent;
  let fixture: ComponentFixture<SujetosEtnicosRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SujetosEtnicosRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SujetosEtnicosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
