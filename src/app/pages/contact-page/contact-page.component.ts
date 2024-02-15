import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ironsubhajit-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {

  imagePath: string = '/assets/icons/contact_logo.png';

  // formGroup: FormGroup | undefined;
  fullNameMinLength: number = 3;
  fullNameMaxLength: number = 50;

  messageMinLength: number = 3;
  messageMaxLength: number = 500;

  fullName: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.fullNameMinLength),
    Validators.maxLength(this.fullNameMaxLength),
  ]);
  emailId: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  message: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.messageMinLength),
    Validators.maxLength(this.messageMaxLength),
  ]);

  loading: boolean = false;

  @Input()
  buttonText: string = 'Send your feedback';

  ngOnInit() {}

  // checks form validity
  isFormValid(): boolean {
    return this.fullName?.valid && this.emailId.valid && this.message?.valid;
  }

  // disable all form fields
  disableFormFields(): void {
    this.fullName?.disable();
    this.emailId?.disable();
    this.message?.disable();
  }

  // enable all form fields
  enableFormFields(): void {
    this.fullName?.enable();
    this.emailId?.enable();
    this.message?.enable();
  }

  sendFeedback() {
    this.loading = true;
    // this.disableFormFields();
    setTimeout(() => {
      this.loading = false;
      // this.enableFormFields();
    }, 10000);
  }
}
