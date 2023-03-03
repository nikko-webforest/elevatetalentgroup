import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StatisticsComponent implements AfterViewInit {

  @Input() animateStats: any;
  @ViewChild('statList') stat: ElementRef | any;
  stats: any = [
    {
      'title': '7 Creators with audiences over 5 Million',
      'svg': '7',
    },
    {
      'title': '60 Creators with audiences over  1 Million',
      'svg': '60',
    },
    {
      'title': '24 Creators with audiences over 100K',
      'svg': '24',
    },
    {
      'title': '9 Targeted Micro creators under 100k ',
      'svg': '9',
    },
    {
      'title': '18-24 We have a collective audience of over 100 million',
      'svg': '18',
    },
    {
      'title': '35-54 We have a collective audiences of 72 million in the 35-54 demo',
      'svg': '35',
    }
  ];

  prevInStat: number = 0;
  prevStat: number = 0;
  activeStat: any = 0;
  nextStat: number = 0;
  nextInStat: number = 0;
  totalStat: number = 0;
  statListHeight: number = 0;
  navPosition: number = 0;
  toExitNode: any = 0;
  borderAnimActive: any = true;
  screenWidth: any = 0;

  @HostListener('document:scroll', ['$event'])
  
  public onViewportScroll() {
    this.activeStat = this.animateStats ? this.activeStat : 0;
    this.updatePrevNextStat();
  }

  constructor() {
    this.onResize();
   }

  ngOnInit(): void {
    this.totalStat = this.stats.length;
  }

  ngAfterViewInit(): void {
    this.statListHeight = this.stat.nativeElement.offsetHeight;
    console.log('Height: ', this.statListHeight );

    console.log('screenWidth = '+this.screenWidth);
  }

  setActive(node: any, event: any) {
    this.toExitNode = (node == 0) ? this.stats[0].svg : this.stats[this.activeStat].svg;
    // this.borderAnimActive = false;
    setTimeout(() => {
      this.toExitNode = '';
      // this.borderAnimActive = true;
    }, 1000);

    this.activeStat = node;
    this.updatePrevNextStat();
    this.navPosition = (node == 0) ? 0 : event.srcElement.offsetTop - 20;
  }

  updatePrevNextStat() {
    if( this.activeStat == 0 ){
      this.prevStat = (this.totalStat - 1);
      this.prevInStat = this.prevStat - 1;
      this.nextStat = this.activeStat + 1;
      this.nextInStat = this.nextStat + 1;
    }
    else if( this.activeStat == 1 ){
      this.prevStat = this.activeStat - 1;
      this.prevInStat = (this.totalStat - 1);
      this.nextStat = this.activeStat + 1;
      this.nextInStat = this.nextStat + 1;
    }
    else if( this.activeStat == (this.totalStat - 1) ){
      this.prevStat = this.activeStat - 1;
      this.prevInStat = this.prevStat - 1;
      this.nextStat = 0;
      this.nextInStat = this.nextStat + 1;
    }
    else if( this.activeStat == (this.totalStat - 2) ){
      this.prevStat = this.activeStat - 1;
      this.prevInStat = this.prevStat - 1;
      this.nextStat = this.activeStat + 1;
      this.nextInStat = 0;
    }
    else {
      this.prevStat = this.activeStat - 1;
      this.prevInStat = this.prevStat - 1;
      this.nextStat = this.activeStat + 1;
      this.nextInStat = this.nextStat + 1;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: undefined) {
    this.screenWidth = window.innerWidth;
    console.log('screenWidth = '+this.screenWidth);
  }

}
