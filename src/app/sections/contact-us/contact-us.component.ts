import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ContactUsComponent implements OnInit {

  @Input() contactEmail: any;
  @Input() contactNumber: any;
  @Input() contactAddress: any;
  @Input() socialMediaList: any;

  @Input() showContactSection: boolean = false;

  contactUsForm: FormGroup;
  contactUsFormSubmitted: boolean = false;
  contactUsFormSubmittedEmpty: boolean | undefined;
  contactUsFormSubmittedEmptyAnimate: boolean | undefined;
  contactUsThankYouMessage: string = 'Thank you for getting in touch!';

  constructor(
    public appComp: AppComponent,
    formBuilder: FormBuilder
    ) {

    this.contactUsForm = formBuilder.group({
      role: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    console.log('this.contactUsForm.controls["role"].touched = '+this.contactUsForm.controls['role'].touched);
    console.log('this.contactUsForm.invalid = '+this.contactUsForm.invalid);
    console.log('this.contactUsForm.valid = '+this.contactUsForm.valid);
  }

  toggleContact() {
    this.appComp.toggleShowHideContactSection();
    this.contactUsForm.reset();
    this.contactUsFormSubmittedEmpty = false;
  }

  submitContact() {
    if( this.contactUsForm.valid ){
      this.contactUsFormSubmitted = true;
      this.contactUsFormSubmittedEmpty = false;
      console.warn(this.contactUsForm.value);
      console.log('Contact Is Submitted!');
      this.contactUsForm.reset();
    }
    else {
      this.contactUsFormSubmitted = false;
      this.contactUsFormSubmittedEmpty = true;
      this.contactUsFormSubmittedEmptyAnimate = true;
      setTimeout(() => {
        this.contactUsFormSubmittedEmptyAnimate = false;
      }, 300);
      console.warn(this.contactUsForm.value);
      console.log('Contact Form is Invalid');
    }
  }

}