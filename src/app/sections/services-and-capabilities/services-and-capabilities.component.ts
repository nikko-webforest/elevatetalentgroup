import { Component, OnInit, ViewEncapsulation, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-services-and-capabilities',
  templateUrl: './services-and-capabilities.component.html',
  styleUrls: ['./services-and-capabilities.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesAndCapabilitiesComponent implements OnInit {

  @Input() animateServicesAndCapabilities: any;

  servicesList: any = [
    'Strategy and Brand Development',
    'Advertising, Messaging',
    'Story Development',
    'Production - Features to Virtual',
    'Live Events - Physical and virtual',
    'Technology - AR/VR MaaS',
    'Creators and Campaign Development'
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

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.selectList('services', true);
  }

  selectList(selected: any, firstLoad: boolean) {
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
    this.fadeList(firstLoad);
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

  fadeList(firstLoad: boolean) {
    setTimeout(() => {
      document.querySelectorAll('.etg-services-and-capabilities .list .item').forEach((li: any, i:any) => {
        setTimeout(() => {
          li.classList.add('animate-now');
        }, (50 * i));
      });
    }, 100);
  }

}
