import { Component, OnInit, Input, HostListener, ViewEncapsulation } from '@angular/core';
// @ts-ignore
import Player from '@vimeo/player';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LatestComponent implements OnInit {

  @Input() animateLatest: any = false;
  player: any;
  video: any;
  isReady: boolean = false;
  isPlaying: boolean = false;

  @HostListener('document:scroll', ['$event'])
  
  public onViewportScroll() {
    if( this.isPlaying && !this.animateLatest ){
      this.togglePlayPause();
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.video = 805977903;
    this.initializedVideo();
  }

  initializedVideo() {
    let self = this;
    let options = {
      id: this.video,
      loop: true,
      background: false,
      controls: false,
      autoplay: false,
      width: document.body.clientWidth + 'px'
    };

    this.player = new Player('player-latest', options);
    // 
    // var iframe = document.querySelector('iframe');
    // this.player = new Player(iframe);
      
    this.player.ready().then(function() {
      console.log('ready');
      var iframe = document.querySelector('iframe');
      // @ts-ignore
      iframe.setAttribute("style", "width: 100%;height: 100%;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);z-index: 1;");
      self.isReady = true;
    });
  }

  togglePlayPause() {
    if( this.isPlaying ){
      this.isPlaying = false;
      this.player.pause().then(function() {
        console.log('Clicked Paused');
      });
    }
    else {
      this.isPlaying = true;
      this.player.play().then(function() {
        console.log('Clicked Play');
      });
    }
  }
}
