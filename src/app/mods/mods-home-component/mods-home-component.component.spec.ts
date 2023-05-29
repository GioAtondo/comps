import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsHomeComponentComponent } from './mods-home-component.component';

describe('ModsHomeComponentComponent', () => {
  let component: ModsHomeComponentComponent;
  let fixture: ComponentFixture<ModsHomeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModsHomeComponentComponent]
    });
    fixture = TestBed.createComponent(ModsHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
