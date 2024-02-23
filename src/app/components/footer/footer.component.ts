import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ironsubhajit-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  openMeetingModalStatus: boolean = false;

  ngOnInit(): void {}

  openMeetingModal() {
    this.openMeetingModalStatus = true;
  }
}
