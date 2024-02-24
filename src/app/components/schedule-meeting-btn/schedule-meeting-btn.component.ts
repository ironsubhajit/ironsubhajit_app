import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ironsubhajit-schedule-meeting-btn',
  templateUrl: './schedule-meeting-btn.component.html',
  styleUrls: ['./schedule-meeting-btn.component.scss'],
})
export class ScheduleMeetingBtnComponent implements OnInit {

  @Input()
  showScheduleMeetingBtn: boolean = true;

  @Output() displayDialogStatus = new EventEmitter<boolean>();
  
  @Input()
  displayDialog: boolean = false;
  loading: boolean = false;

  fullNameMinLength: number = 3;
  fullNameMaxLength: number = 50;

  fullName: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.fullNameMinLength),
    Validators.maxLength(this.fullNameMaxLength),
  ]);

  emailId: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  meetingDate: FormControl = new FormControl('', [Validators.required]);
  meetingTime: FormControl = new FormControl('', [Validators.required]);

  currentDate: Date = new Date();
  currentTime: Date = new Date();

  dialogHeaderStyle: any = {
    width: '50%',
    'font-weight': '300',
    color: 'red',
  };

  openScheduleMeetingDialog() {
    console.log('pop up to schedule a meeting.');
    this.displayDialog = true;
  }

  ngOnInit(): void {}

  // checks form fields validity
  isFormFieldsValid(): boolean {
    let status = this.fullName.valid && this.emailId.valid && this.meetingDate.valid && this.meetingTime.valid
    // console.log(`form valid status: ${status}`)
    return status
  }

  // function to check schedule button disable status 
  isScheduleBtnDisabled(): boolean {
    // console.log(`form valid: ${this.loading} - ${!this.isFormFieldsValid()} - ${this.loading || !this.isFormFieldsValid}`)
    return this.loading || !this.isFormFieldsValid();
  }

  // method to reset all the form fields
  private resetFormFields() {
    this.fullName.reset()
    this.emailId.reset()
    this.meetingDate.reset()
    this.meetingTime.reset()
  }

  scheduleMeeting() {
    this.loading = true;
    const meetingTimings = {
      "full name": this.fullName.value,
      "email": this.emailId.value,
      "date": this.meetingDate.value,
      "time": this.meetingTime.value
    }

    console.log("meeting schedule data: \n", meetingTimings)

    setTimeout(() => {
      this.loading = false;
      console.log('timeout func endded and loading false');
      this.closeScheduleMeetingDialog();
    }, 5000);
  }

  closeScheduleMeetingDialog() {
    console.log('pop up close to schedule a meeting.');
    this.resetFormFields();
    this.displayDialog = false;
    // Emiting displayDialogOpen Status to parent
    this.displayDialogStatus.emit(false);
  }
}
