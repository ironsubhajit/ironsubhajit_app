import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ironsubhajit-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent implements OnInit {
  @Input()
  buttonText: string = '';

  @Input()
  loading: boolean = false;

  @Input()
  onClick!: () => void;

  @Input()
  isValid: boolean = false;

  ngOnInit(): void {}

  handleClick(): any {
    if (this.onClick) {
      this.onClick();
    }
  }
}
