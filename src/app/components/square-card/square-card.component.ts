import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ironsubhajit-square-card',
  templateUrl: './square-card.component.html',
  styleUrls: ['./square-card.component.scss'],
})
export class SquareCardComponent {
  @Input()
  parentDivStyle: { [key: string]: string } = {};

  @Input()
  cardTitle: string = '';

  @Input()
  btnText: string = '';

  @Input()
  redirectLink: string = '/home';

  goToLink(): void {
    this.router.navigate([this.redirectLink]);
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}
