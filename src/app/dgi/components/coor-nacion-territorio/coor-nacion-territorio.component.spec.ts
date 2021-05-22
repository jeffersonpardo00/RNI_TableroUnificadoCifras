import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoorNacionTerritorioComponent } from './coor-nacion-territorio.component';

describe('CoorNacionTerritorioComponent', () => {
  let component: CoorNacionTerritorioComponent;
  let fixture: ComponentFixture<CoorNacionTerritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoorNacionTerritorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoorNacionTerritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
