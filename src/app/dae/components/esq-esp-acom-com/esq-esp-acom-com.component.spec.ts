import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqEspAcomComComponent } from './esq-esp-acom-com.component';

describe('EsqEspAcomComComponent', () => {
  let component: EsqEspAcomComComponent;
  let fixture: ComponentFixture<EsqEspAcomComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsqEspAcomComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsqEspAcomComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
