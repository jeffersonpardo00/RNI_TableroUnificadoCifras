import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivosDescargablesComponent } from './archivos-descargables.component';

describe('ArchivosDescargablesComponent', () => {
  let component: ArchivosDescargablesComponent;
  let fixture: ComponentFixture<ArchivosDescargablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivosDescargablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivosDescargablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
