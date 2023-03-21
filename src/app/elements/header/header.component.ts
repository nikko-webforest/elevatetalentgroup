import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {

  @Input() showHeaderBackground: boolean = false;
  @Input() showContactSection: boolean = false;
  
  constructor(
    public appComp: AppComponent
  ) {
    
  }

  ngOnInit(): void {
  }

  showContact() {
    this.appComp.toggleShowHideContactSection();
  }

}
