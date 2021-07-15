import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDaeComponent } from './menu-dae.component';

describe('MenuDaeComponent', () => {
  let component: MenuDaeComponent;
  let fixture: ComponentFixture<MenuDaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
