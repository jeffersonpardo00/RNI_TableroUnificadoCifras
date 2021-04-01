import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevocatoriaAutosComponent } from './revocatoria-autos.component';

describe('RevocatoriaAutosComponent', () => {
  let component: RevocatoriaAutosComponent;
  let fixture: ComponentFixture<RevocatoriaAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevocatoriaAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevocatoriaAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
