import { Component } from '@angular/core';

@Component({
  selector: 'ironsubhajit-schedule-meeting-btn',
  templateUrl: './schedule-meeting-btn.component.html',
  styleUrls: ['./schedule-meeting-btn.component.scss'],
})
export class ScheduleMeetingBtnComponent {
  visible: boolean = false;

  openScheduleMeetingDialog() {
    console.log('pop up to schedule a meeting.');
    this.visible = true;
  }

  closeScheduleMeetingDialog() {
    console.log('pop up close to schedule a meeting.');
    this.visible = false;
  }

}
