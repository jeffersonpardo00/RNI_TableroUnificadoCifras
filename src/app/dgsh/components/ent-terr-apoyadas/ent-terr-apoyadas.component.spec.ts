import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntTerrApoyadasComponent } from './ent-terr-apoyadas.component';

describe('EntTerrApoyadasComponent', () => {
  let component: EntTerrApoyadasComponent;
  let fixture: ComponentFixture<EntTerrApoyadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntTerrApoyadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntTerrApoyadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
