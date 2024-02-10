import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ironsubhajit-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  // formGroup: FormGroup | undefined;
  fullName: FormControl = new FormControl('');
  emailId: FormControl = new FormControl('');
  message: FormControl = new FormControl('');

  loading: boolean = false;

  @Input()
  buttonText: string = 'Send your feedback';

  ngOnInit() {}

  sendFeedback() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 10000);
  }
}
