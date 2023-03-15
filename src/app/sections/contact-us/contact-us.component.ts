import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

  contactRole: any = '';
  contactFname: any = '';
  contactLname: any = '';
  contactEmail: any = '';

  constructor(private sharedService:SharedService) {
    this.clickEventSubscription = this.sharedService.getContactCompClickEvent().subscribe(() => {
      this.toggleContact();
    });
  }

  ngOnInit(): void {
  }

  openContact() {
    this.showContact = true;
  }

  closeContact() {
    this.sharedService.toggleContactComponent();
  }

  toggleContact() {
    this.showContact = !this.showContact;
  }

}
