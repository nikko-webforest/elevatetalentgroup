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
  
  showHeaderBackground: boolean = false;
  animateCreatorsEl: any = null;

  @HostListener('document:scroll', ['$event'])
  
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const header = this.divHeader.nativeElement.getBoundingClientRect();
    const creators = this.divCreators.nativeElement.getBoundingClientRect();
    this.showHeaderBackground = (header.top < 0) ? true : false;
    this.animateCreatorsEl = ((creators.top + (window.innerHeight/2)) <  (window.pageYOffset + creators.top )) ? true : false;
    console.log(creators.top + '  ' + (window.pageYOffset + creators.top ));

    
  }

}
