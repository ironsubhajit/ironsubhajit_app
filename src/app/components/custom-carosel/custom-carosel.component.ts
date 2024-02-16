import { Component, Input } from '@angular/core';
import { ServiceType } from 'src/app/interfaces/services_type';

@Component({
  selector: 'ironsubhajit-custom-carosel',
  templateUrl: './custom-carosel.component.html',
  styleUrls: ['./custom-carosel.component.scss'],
})
export class CustomCaroselComponent {
  @Input()
  avalServices: ServiceType[] = [
    {
      _id: '0001',
      service_name: 'Website service',
      desciption: {
        "title": 'Website services we offer',
        "descPoints": [
          'All-in-one website solutions: From design to deployment, we handle it all seamlessly.',
          'Expertise you can trust: Our team is dedicated to bringing your vision to life with precision and excellence.',
          'Simplified process: Enjoy a hassle-free experience from start to finish, with transparent communication every step of the way.',
          'Hourly price: $20/hr',
          'Fixed price: Fixed-price packages tailored to your project needs.',
          'Flexible pricing options: Choose between hourly rates or fixed-price packages tailored to your project needs.',
        ],
      },
      thumbnail_url: '/assets/icons/web_dev_service_logo.png',
    },
    {
      _id: '0002',
      service_name: 'Mobile App service',
      desciption: {
        "title": 'Mobile Application services we offer',
        "descPoints": [
          'All-in-one website solutions: From design to deployment, we handle it all seamlessly.',
          'Expertise you can trust: Our team is dedicated to bringing your vision to life with precision and excellence.',
          'Simplified process: Enjoy a hassle-free experience from start to finish, with transparent communication every step of the way.',
          'Hourly price: $20/hr',
          'Fixed price: Fixed-price packages tailored to your project needs.',
          'Flexible pricing options: Choose between hourly rates or fixed-price packages tailored to your project needs.',
        ],
      },
      thumbnail_url: '/assets/icons/MobAppDevelopment1.png',
    },
    {
      _id: '0003',
      service_name: 'AI Services',
      desciption: {
        "title": 'AI services we offer',
        "descPoints": [
          'All-in-one website solutions: From design to deployment, we handle it all seamlessly.',
          'Expertise you can trust: Our team is dedicated to bringing your vision to life with precision and excellence.',
          'Simplified process: Enjoy a hassle-free experience from start to finish, with transparent communication every step of the way.',
          'Hourly price: $20/hr',
          'Fixed price: Fixed-price packages tailored to your project needs.',
          'Flexible pricing options: Choose between hourly rates or fixed-price packages tailored to your project needs.',
        ],
      },
      thumbnail_url: '/assets/icons/CreativeTeam1.png',
    },
    {
      _id: '0004',
      service_name: 'Consultant Services',
      desciption: {
        "title": 'Tech Consultancy services we offer',
        "descPoints": [
          'All-in-one website solutions: From design to deployment, we handle it all seamlessly.',
          'Expertise you can trust: Our team is dedicated to bringing your vision to life with precision and excellence.',
          'Simplified process: Enjoy a hassle-free experience from start to finish, with transparent communication every step of the way.',
          'Hourly price: $20/hr',
          'Fixed price: Fixed-price packages tailored to your project needs.',
          'Flexible pricing options: Choose between hourly rates or fixed-price packages tailored to your project needs.',
        ],
      },
      thumbnail_url: '/assets/icons/services_logo_purple1.png',
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
