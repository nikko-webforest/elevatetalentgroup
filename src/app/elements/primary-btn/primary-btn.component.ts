import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class PrimaryBtnComponent implements OnInit {

  @Input() url: any;
  @Input() text: any;
  @Input() icon: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  redirect() {
    window.location.href = this.url;
  }

}
