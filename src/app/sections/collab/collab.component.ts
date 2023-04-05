import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef, OnChanges, HostListener, Output, EventEmitter } from '@angular/core';
// @ts-ignore
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CollabComponent implements OnInit, OnChanges {

  @Input() animateCollab: any;
  @Output() enableBodyScroll = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {}

  scrollValue: number = 0;
  @HostListener('wheel', ['$event'])
  public onMouseWheel(event: any) {

    if( event.deltaY > 0 && this.scrollValue < 5 ){
      this.scrollValue = this.scrollValue + 1;
    }

    if( event.deltaY < 0 && this.scrollValue != 0 ){
      this.scrollValue = this.scrollValue - 1;
    }

    if( this.scrollValue == 5 ){
      this.enableBodyScroll.emit(true);
    }

    console.log('this.scrollValue = '+this.scrollValue);

  }

}
