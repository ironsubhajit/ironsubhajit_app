import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTextComponent } from './custom-text.component';

describe('CustomTextComponent', () => {
  let component: CustomTextComponent;
  let fixture: ComponentFixture<CustomTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTextComponent]
    });
    fixture = TestBed.createComponent(CustomTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
