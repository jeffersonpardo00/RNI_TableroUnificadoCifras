import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaAdministrativaComponent } from './via-administrativa.component';

describe('ViaAdministrativaComponent', () => {
  let component: ViaAdministrativaComponent;
  let fixture: ComponentFixture<ViaAdministrativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViaAdministrativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaAdministrativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
