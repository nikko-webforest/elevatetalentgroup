import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
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

  @Input() contactEmail: any;
  @Input() contactNumber: any;
  @Input() contactAddress: any;
  @Input() socialMediaList: any;

  contactForm: FormGroup;

  constructor( private sharedService: SharedService, formBuilder: FormBuilder ) {
    this.clickEventSubscription = this.sharedService.getContactCompClickEvent().subscribe(() => {
      this.toggleContact();
    });

    this.contactForm = formBuilder.group({
      role: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
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

  submitContact() {
    
  }

  get form_controls() {
    return this.contactForm.controls;
  }

}
