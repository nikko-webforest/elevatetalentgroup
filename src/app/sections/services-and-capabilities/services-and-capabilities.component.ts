import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-services-and-capabilities',
  templateUrl: './services-and-capabilities.component.html',
  styleUrls: ['./services-and-capabilities.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesAndCapabilitiesComponent implements OnInit {

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

  ngAfterViewInit(): void {
    this.animateEach();
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
    this.fadeList(500);
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

  animateEach() {
    setTimeout(() => {
      document.querySelectorAll('.etg-services-and-capabilities .animate-init').forEach((item: any, index:any) => {
        item.classList.add('animate-now');
      });
      this.fadeList(1000);
    }, 1000);
  }

  fadeList(duration: number) {
    setTimeout(() => {
      document.querySelectorAll('.list .item').forEach((li: any, i:any) => {
        li.classList.add('animate-now');
      });
    }, duration);
  }

}
