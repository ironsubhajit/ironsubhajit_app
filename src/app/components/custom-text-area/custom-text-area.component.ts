import { Component, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class CustomInputErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'ironsubhajit-custom-text-area',
  templateUrl: './custom-text-area.component.html',
  styleUrls: ['./custom-text-area.component.scss']
})
export class CustomTextAreaComponent {
  @Input()
  formControlFieldName!: FormControl;

  @Input()
  placeholder: string = '';

  @Input()
  loading: boolean = false;

  @Input()
  customStyle: { [key: string]: string } = {};

  isFocused: boolean = false;

  @Input()
  inputType: string = 'text';

  @Input()
  minLength: number = 3;
  
  @Input()
  maxLength: number = 10;

  matcher = new CustomInputErrorStateMatcher();

  constructor() {}

  ngOnInit(): void {}

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }
}
