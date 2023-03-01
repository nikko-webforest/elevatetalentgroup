import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

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

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    
  }

  clickedBtn() {
    if( this.url == 'toggle-contact' ) {
      this.sharedService.toggleContactComponent();
    }
    else {
      this.redirect();
    }
  }

  redirect() {
    window.location.href = this.url;
  }

}
