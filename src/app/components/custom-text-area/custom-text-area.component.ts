import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ironsubhajit-custom-text-area',
  templateUrl: './custom-text-area.component.html',
  styleUrls: ['./custom-text-area.component.scss']
})
export class CustomTextAreaComponent {
  @Input()
  control!: FormControl;

  @Input()
  placeholder: string = '';

  @Input()
  loading: boolean = false;

  @Input()
  customStyle: { [key: string]: string } = {};

  isFocused: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }
}
