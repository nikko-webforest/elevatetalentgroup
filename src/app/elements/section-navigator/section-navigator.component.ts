import { Component, OnInit, AfterViewInit, ViewEncapsulation, Input, HostListener, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-section-navigator',
  templateUrl: './section-navigator.component.html',
  styleUrls: ['./section-navigator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SectionNavigatorComponent implements OnInit {

  @Input()  node: any = 1;
  @Output() activeNode = new EventEmitter<number>();

  sectionList: any = [
    {
      'title': "Welcome to Elevate Talent Group",
      'id': 'banner'
    },
    {
      'title': "Out of Siloes and into Collabartion",
      'id': 'collab'
    },
    {
      'title': "Our Creators",
      'id': 'creators'
    },
    {
      'title': "275 Million and One",
      'id': 'statistics'
    },
    {
      'title': "The Latest - Francesca's",
      'id': 'latest'
    },
    {
      'title': "How We Operate",
      'id': 'process'
    },
    {
      'title': "Elevate Talent Group Full Service",
      'id': 'fullservice'
    },
    {
      'title': "Elevate Talent Group - Services",
      'id': 'servicesandcapabilities'
    },
    {
      'title': "Key to Success",
      'id': 'success'
    },
    {
      'title': "Our Brand Partners",
      'id': 'partners'
    },
    {
      'title': "Contact Us",
      'id': 'contactus'
    }
  ];
  totalSectionCount: number = 0;
  prevSectionCount: number = 0;
  currSectionCount: number = 1;
  nextSectionCount: number = 0;

  @HostListener('document:scroll', ['$event'])
  
  public onViewportScroll() {
    if(this.currSectionCount != this.node){
      this.currSectionCount = this.node;
      this.updateSectionCount();
    }
  }

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
    this.activeNode.emit(this.currSectionCount);
    this.updateSectionCount();
  }

  nextSection() {
    if( this.currSectionCount == this.totalSectionCount ){
      this.currSectionCount = 1;
    }
    else {
      this.currSectionCount += 1;
    }
    this.activeNode.emit(this.currSectionCount);
    this.updateSectionCount();
  }

}
