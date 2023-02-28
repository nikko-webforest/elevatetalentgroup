import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-section-navigator',
  templateUrl: './section-navigator.component.html',
  styleUrls: ['./section-navigator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SectionNavigatorComponent implements OnInit {

  sectionList: any = [
    "Welcome to Elevate Talent Group",
    "Out of Siloes and into Collabartion",
    "Our Creators",
    "275 Million and One",
    "The Latest - Francesca's",
    "How We Operate",
    "Elevate Talent Group Full Service",
    "Elevate Talent Group - Services",
    "Key to Success",
    "Our Brand Partners",
    "Contact Us"
  ];
  totalSectionCount: number = 0;
  prevSectionCount: number = 0;
  currSectionCount: number = 1;
  nextSectionCount: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalSectionCount = this.sectionList.length;
    this.updateSectionCount();
  }

  ngAfterViewInit(): void {
    
  }

  counter(i: number) {
    return new Array(i);
  }

  updateSectionCount() {
    if( this.currSectionCount == 1 ){
      this.prevSectionCount = this.totalSectionCount;
      this.nextSectionCount = this.currSectionCount + 1;
    }
    else if( this.currSectionCount == this.totalSectionCount ){
      this.prevSectionCount = this.currSectionCount - 1;
      this.nextSectionCount = 1;
    }
    else {
      this.prevSectionCount = this.currSectionCount - 1;
      this.nextSectionCount = this.currSectionCount + 1;
    }
  }

  prevSection() {
    if( this.currSectionCount == 1 ){
      this.currSectionCount = this.totalSectionCount;
    }
    else {
      this.currSectionCount -= 1;
    }
    this.updateSectionCount();
    console.log('Prev Btn is Clicked');
  }

  nextSection() {
    if( this.currSectionCount == this.totalSectionCount ){
      this.currSectionCount = 1;
    }
    else {
      this.currSectionCount += 1;
    }
    this.updateSectionCount();
    console.log('Next Btn is Clicked');
  }

}
