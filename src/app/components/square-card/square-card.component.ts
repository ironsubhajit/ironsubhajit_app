import { Component, Input } from '@angular/core';

@Component({
  selector: 'ironsubhajit-square-card',
  templateUrl: './square-card.component.html',
  styleUrls: ['./square-card.component.scss']
})
export class SquareCardComponent {
  @Input()
  parentDivStyle: {[key: string]: string} = {};
  
  @Input()
  cardTitle: string = "";

  @Input()
  btnText: string = "";
  
  ngOnInit() {

  }
}
