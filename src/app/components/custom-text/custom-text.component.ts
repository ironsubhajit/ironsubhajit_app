import { Component, Input } from '@angular/core';

@Component({
  selector: 'ironsubhajit-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.scss']
})
export class CustomTextComponent {
  @Input()
  customText: string = '';
  ngOnInit() {

  }
}
