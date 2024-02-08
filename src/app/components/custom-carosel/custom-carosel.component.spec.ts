import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCaroselComponent } from './custom-carosel.component';

describe('CustomCaroselComponent', () => {
  let component: CustomCaroselComponent;
  let fixture: ComponentFixture<CustomCaroselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomCaroselComponent]
    });
    fixture = TestBed.createComponent(CustomCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
