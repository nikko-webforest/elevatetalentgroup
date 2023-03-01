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
  // public showContact: boolean = true;
  
  contactRole: any = '';
  contactFname: any = '';
  contactLname: any = '';
  contactEmail: any = '';

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
    // console.log('closeContact() = '+this.showContact);

    this.animateEach();
  }

  toggleContact() {
    this.showContact = !this.showContact;
    // console.log('toggleContact() = '+this.showContact);

    this.animateEach();
  }

  animateEach() {
    console.log('showContact = '+this.showContact);
    if( this.showContact ) {
      setTimeout(() => {
        document.querySelectorAll('.etg-contact-us .animate-init').forEach((item:any, index:any) => {
          item.classList.add('animate-now');
        });
      }, 1000);
    }
    else {
      document.querySelectorAll('.etg-contact-us .animate-init').forEach((item:any, index:any) => {
        item.classList.remove('animate-now');
      });
    }
  }

}
