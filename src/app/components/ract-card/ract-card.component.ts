import { Component, Input } from '@angular/core';

@Component({
  selector: 'ironsubhajit-ract-card',
  templateUrl: './ract-card.component.html',
  styleUrls: ['./ract-card.component.scss']
})
export class RactCardComponent {
  @Input()
  cardTitle: string = "";

  @Input()
  btnText: string = "";
  
  ngOnInit() {

  }
}
