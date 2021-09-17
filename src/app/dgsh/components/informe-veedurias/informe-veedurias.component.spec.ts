import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeVeeduriasComponent } from './informe-veedurias.component';

describe('InformeVeeduriasComponent', () => {
  let component: InformeVeeduriasComponent;
  let fixture: ComponentFixture<InformeVeeduriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeVeeduriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeVeeduriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
