import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements AfterViewInit {

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
    }
  ];
  activeStat: any = 0;
  statListHeight: number = 0;
  navPosition: number = 0;
  toExitNode: any = 0;
  borderAnimActive: boolean = true;
  constructor() { }

  ngAfterViewInit(): void {
    this.statListHeight = this.stat.nativeElement.offsetHeight;
    console.log('Height: ', this.statListHeight );
  }

  setActive(node: any, event: any) {
    this.toExitNode = (node == 0) ? this.stats[0].svg : this.stats[this.activeStat].svg;
    this.borderAnimActive = false;
    setTimeout(() => {
      this.toExitNode = '';
      this.borderAnimActive = true;
    }, 1000);

    this.activeStat = node;
    this.navPosition = (node == 0) ? 0 : event.srcElement.offsetTop - 15;
    
  }

}
