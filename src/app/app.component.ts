import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Elevate Talent Group';

  @ViewChild('header') divHeader!: ElementRef;
  @ViewChild('creators') divCreators!: ElementRef;
  @ViewChild('collab') divCollab!: ElementRef;
  @ViewChild('statistics') divStats!: ElementRef;
  @ViewChild('latest') divLatest!: ElementRef;
  @ViewChild('fullservice') divFullservice!: ElementRef;

  showHeaderBackground: boolean = false;
  animateCreatorsEl: any = null;
  animateCollab: any = null;
  animateStats: any = null;
  animateLatest: any = null;
  animateFullService: any = null;

  @HostListener('document:scroll', ['$event'])
  
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const header = this.divHeader.nativeElement.getBoundingClientRect();
    this.showHeaderBackground = (header.top < 0) ? true : false;

    const creators = this.divCreators.nativeElement.getBoundingClientRect();
    this.animateCreatorsEl = ((window.innerHeight/2) >  creators.top ) ? true : false;

    const collab = this.divCollab.nativeElement.getBoundingClientRect();
    this.animateCollab = ((window.innerHeight/2) >  collab.top ) ? true : false;

    const statistics = this.divStats.nativeElement.getBoundingClientRect();
    this.animateStats = ((window.innerHeight/2) >  statistics.top ) ? true : false;

    const latest = this.divStats.nativeElement.getBoundingClientRect();
    this.animateLatest = ((window.innerHeight/2) >  latest.top && latest.top > 0) ? true : false;

    const fullService = this.divFullservice.nativeElement.getBoundingClientRect();
    this.animateFullService = ((window.innerHeight/2) >  fullService.top && fullService.top > 0) ? true : false;
    
  }

}
