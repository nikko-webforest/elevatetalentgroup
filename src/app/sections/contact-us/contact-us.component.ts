import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactUsComponent implements OnInit {
  clickEventSubscription:Subscription;

  public showContact: boolean = false;
  socialMediaList: any = [
    {
      'platform': 'Instagram',
      'link': 'https://www.instagram.com/',
    },
    {
      'platform': 'LinkedIn',
      'link': 'https://www.linkedin.com/',
    },
  ];

  constructor(private sharedService:SharedService) {
    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe(() => {
      this.toggleContact();
    });
  }

  ngOnInit(): void {
  }

  closeContact() {
    this.showContact = false;
    console.log('closeContact() = '+this.showContact);
  }

  toggleContact() {
    this.showContact = !this.showContact;
    console.log('toggleContact() = '+this.showContact);
  }

}
