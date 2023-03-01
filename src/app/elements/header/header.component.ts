import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {
  clickEventSubscription: Subscription;

  @Input() showHeaderBackground: boolean = false;

  public toggleNavMenuBtn: boolean = false;
  // public toggleNavMenuBtn: boolean = true;
  
  constructor(private sharedService: SharedService) {
    this.clickEventSubscription = this.sharedService.getContactCompClickEvent().subscribe(() => {
      this.toggleNavMenuBtn = !this.toggleNavMenuBtn;
    });
  }

  ngOnInit(): void {
  }

  showContact() {
    this.sharedService.toggleContactComponent();
  }

}
