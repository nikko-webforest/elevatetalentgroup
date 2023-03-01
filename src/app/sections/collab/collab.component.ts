import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollabComponent implements OnInit {

  @Input() animateCollab: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
