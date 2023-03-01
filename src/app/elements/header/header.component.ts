import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {

  @Input() showHeaderBackground: boolean = false;
  
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {

  }

  clickNavBtn() {
    this.sharedService.sendClickEvent();
  }

}
