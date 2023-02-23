import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-full-services',
  templateUrl: './full-services.component.html',
  styleUrls: ['./full-services.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FullServicesComponent implements OnInit {

  servicesList: any = [
    'Strategy and Brand Development',
    'Advertising, Messaging',
    'Story Development',
    'Production - Features to Virtual',
    'Live Events - Physical and virtual',
    'Technology - AR/VR MaaS',
    'Creators and campaign development'
  ];

  capabilitiesList: any = [
    'Contracting Deal Negotations',
    'Branding/Brand Protection',
    'Brand Integration',
    'Media Promotions',
    'Content Monetization',
    'Network Development',
    'Creative Development'
  ];

  servicesActive: boolean = true;
  capabilitiesActive: boolean = false;

  itemList: any = [];

  constructor() { }

  ngOnInit(): void {
    this.selectList('services');
  }

  selectList(selected: any) {
    if( selected == 'services' ){
      this.servicesActive = true;
      this.capabilitiesActive = false;
      this.selectServicesList();
    }
    if( selected == 'capabilities' ){
      this.servicesActive = false;
      this.capabilitiesActive = true;
      this.selectCapabilitiesList();
    }
    this.fadeList();
  }

  selectServicesList() {
    this.itemList = [];
    this.servicesList.forEach((item : any) => {
      this.itemList.push(item);
    });
  }

  selectCapabilitiesList() {
    this.itemList = [];
    this.capabilitiesList.forEach((item : any) => {
      this.itemList.push(item);
    });
  }

  fadeList() {
    setTimeout(() => {
      document.querySelectorAll('.list .item').forEach((li: any, i:any) => {
        setTimeout(() => {
          li.classList.add('fade-left');
        }, (50 * i));
      });
    }, 100);
  }

}
