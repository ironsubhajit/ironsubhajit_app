import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ironsubhajit-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
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

  ngOnInit(): void {
    console.log("Loading value => ", this.loading)
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }
}
