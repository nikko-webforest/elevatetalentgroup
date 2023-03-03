import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Elevate Talent Group';

  @ViewChild('header') divHeader!: ElementRef;
  @ViewChild('banner') divBanner!: ElementRef;
  @ViewChild('creators') divCreators!: ElementRef;
  @ViewChild('collab') divCollab!: ElementRef;
  @ViewChild('statistics') divStats!: ElementRef;
  @ViewChild('process') divProcess!: ElementRef;
  @ViewChild('latest') divLatest!: ElementRef;
  @ViewChild('fullservice') divFullservice!: ElementRef;
  @ViewChild('servicesandcapabilities') divServicesAndCapabilities!: ElementRef;
  @ViewChild('success') divSuccess!: ElementRef;
  @ViewChild('partners') divPartners!: ElementRef;
  @ViewChild('footer') divFooter!: ElementRef;

  showHeaderBackground: boolean = false;
  animateCreatorsEl: any = null;
  animateCollab: any = null;
  animateStats: any = null;
  animateLatest: any = null;
  animateFullService: any = null;
  animateServicesAndCapabilities: any = null;
  animateSuccess: any = null;
  node: any = 1;

  @HostListener('document:scroll', ['$event'])
  
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const header = this.divHeader.nativeElement.getBoundingClientRect();
    this.showHeaderBackground = (header.top < 0) ? true : false;

    const creators = this.divCreators.nativeElement.getBoundingClientRect();
    this.animateCreatorsEl = ((window.innerHeight) >  creators.top) ? true : false;

    const collab = this.divCollab.nativeElement.getBoundingClientRect();
    this.animateCollab = ((window.innerHeight/2) >  collab.top ) ? true : false;

    const statistics = this.divStats.nativeElement.getBoundingClientRect();
    this.animateStats = ((window.innerHeight/2) >  statistics.top ) ? true : true;

    const latest = this.divLatest.nativeElement.getBoundingClientRect();
    this.animateLatest = ((window.innerHeight/2) >  latest.top && latest.top > 0) ? true : false;

    const fullService = this.divFullservice.nativeElement.getBoundingClientRect();
    this.animateFullService = ((window.innerHeight/2) >  fullService.top && fullService.top > 0) ? true : false;

    const servicesAndCapabilities = this.divServicesAndCapabilities.nativeElement.getBoundingClientRect();
    this.animateServicesAndCapabilities  = ((window.innerHeight/2) >  servicesAndCapabilities.top ) ? true : false;

    const success = this.divSuccess.nativeElement.getBoundingClientRect();
    this.animateSuccess  = ((window.innerHeight/2) >  success.top ) ? true : false;

    this.node = this.getVisibleSection();
    console.log(this.getVisibleSection());
    
  }

  scrollTo(node: any) {
    const sections = [
      this.divBanner.nativeElement,
      this.divCollab.nativeElement,
      this.divCreators.nativeElement,
      this.divStats.nativeElement,
      this.divLatest.nativeElement,
      this.divProcess.nativeElement,
      this.divFullservice.nativeElement,
      this.divServicesAndCapabilities.nativeElement,
      this.divSuccess.nativeElement,
      this.divPartners.nativeElement,
      this.divFooter.nativeElement
    ];

    sections[(node - 1)].scrollIntoView({behavior: 'smooth'});
  }

  getVisibleSection() {

    const windowHeight = window.innerHeight;

    switch(true){
      case this.isInViewport(this.divBanner.nativeElement) :
        return 1;
      case this.isInViewport(this.divCollab.nativeElement) :
        return 2;
      case this.isInViewport(this.divCreators.nativeElement) :
        return 3;
      case this.isInViewport(this.divStats.nativeElement) :
        return 4;
      case this.isInViewport(this.divLatest.nativeElement) :
        return 5;
      case this.isInViewport(this.divProcess.nativeElement) :
        return 6;
      case this.isInViewport(this.divFullservice.nativeElement) :
        return 7;
      case this.isInViewport(this.divServicesAndCapabilities.nativeElement) :
        return 8;
      case this.isInViewport(this.divSuccess.nativeElement) :
        return 9;
      case this.isInViewport(this.divPartners.nativeElement) :
        return 10;
      case this.isInViewport(this.divFooter.nativeElement) :
        return 11;
      default: 
       return 0;
    }
  }

  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return ( ((rect.top - 200) - rect.height) < 0 && (rect.bottom - 200) > 0);
  }
}
