import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import * as moment from 'moment';
import { ErrorStateMatcher } from '@angular/material/core';



/** Error when invalid control is dirty, touched, or submitted. */
export class CustomInputErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'ironsubhajit-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  @Input()
  formControlFieldName!: FormControl;

  @Input()
  placeholder: string = '';

  @Input()
  loading: boolean = false;

  @Input()
  customStyle: { [key: string]: string } = {};

  @Input()
  inputType: string = 'text';

  @Input()
  minLength: number = 3;
  @Input()
  maxLength: number = 10;

  @Input()
  minDate: Date = new Date();

  @Input()
  minTime: string = this.getCurrentTime();
  
  matcher = new CustomInputErrorStateMatcher();

  getCurrentTime(): string {
    const now = new Date();
    const hours = this.padZero(now.getHours());
    const minutes = this.padZero(now.getMinutes());
    const seconds = this.padZero(now.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }
  
  private padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  // Method to format the date
  formatedDate(date: Date) {
    return moment(date).format('YYYY-MM-DD');
  }

  ngOnInit(): void {
    // console.log("Loading value => ", this.loading)
    // console.log("formcontrol value => ", this.formControlFieldName.value)
  }
}
