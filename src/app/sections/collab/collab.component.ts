import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.animateEach();
  }

  animateEach() {
    setTimeout(() => {
      document.querySelectorAll('.etg-collab .animate-init').forEach((item:any, index:any) => {
        item.classList.add('animate-now');
      });
    }, 100);
  }

}
