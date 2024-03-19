import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ironsubhajit-ract-card',
  templateUrl: './ract-card.component.html',
  styleUrls: ['./ract-card.component.scss'],
})
export class RactCardComponent {
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
