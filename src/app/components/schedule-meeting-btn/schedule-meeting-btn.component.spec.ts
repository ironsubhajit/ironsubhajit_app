import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMeetingBtnComponent } from './schedule-meeting-btn.component';

describe('ScheduleMeetingBtnComponent', () => {
  let component: ScheduleMeetingBtnComponent;
  let fixture: ComponentFixture<ScheduleMeetingBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleMeetingBtnComponent]
    });
    fixture = TestBed.createComponent(ScheduleMeetingBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
