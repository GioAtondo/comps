import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentComponent } from './segment.component';

describe('SegmentComponent', () => {
  let component: SegmentComponent;
  let fixture: ComponentFixture<SegmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentComponent]
    });
    fixture = TestBed.createComponent(SegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
