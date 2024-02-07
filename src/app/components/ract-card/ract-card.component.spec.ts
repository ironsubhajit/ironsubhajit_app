import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RactCardComponent } from './ract-card.component';

describe('RactCardComponent', () => {
  let component: RactCardComponent;
  let fixture: ComponentFixture<RactCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RactCardComponent]
    });
    fixture = TestBed.createComponent(RactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
