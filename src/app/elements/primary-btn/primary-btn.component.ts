import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

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

  constructor(
    public appComp: AppComponent
  ) { }

  ngOnInit(): void {
    
  }

  clickedBtn() {
    if( this.url == 'toggle-contact' ) {
      this.appComp.toggleShowHideContactSection();
    }
    else {
      this.redirect();
    }
  }

  redirect() {
    window.location.href = this.url;
  }

}
