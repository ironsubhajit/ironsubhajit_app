import { Component, Input } from '@angular/core';
import { ServiceType } from 'src/app/interfaces/services_type';

@Component({
  selector: 'ironsubhajit-custom-carosel',
  templateUrl: './custom-carosel.component.html',
  styleUrls: ['./custom-carosel.component.scss'],
})
export class CustomCaroselComponent {
  @Input()
  avalServices: ServiceType[]= [
    {
      _id: '1000',
      service_name: 'Demo Name',
      desciption: 'Demo desc',
      thumbnail_url: '/assets/icons/web_dev_service_logo.png',
      category: 'Web dev',
      hour_price: '$20/hr',
      fixed_price: 'Based on project.',
    },
    {
      _id: '1001',
      service_name: 'Demo Name 2',
      desciption: 'Demo desc',
      thumbnail_url: '/assets/icons/services_logo_purple.png',
      category: 'Web dev',
      hour_price: '$20/hr',
      fixed_price: 'Based on project.',
    },
    {
      _id: '1002',
      service_name: 'Demo Name 3',
      desciption: 'Demo desc',
      thumbnail_url: '/assets/icons/web_dev_service_logo.png',
      category: 'Web dev',
      hour_price: '$20/hr',
      fixed_price: 'Based on project.',
    },
  ];

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
