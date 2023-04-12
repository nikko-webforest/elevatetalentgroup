import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  @Input() navScroll: boolean = false;

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
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
    // console.log('this.contactUsForm.controls["role"].touched = '+this.contactUsForm.controls['role'].touched);
    // console.log('this.contactUsForm.invalid = '+this.contactUsForm.invalid);
    // console.log('this.contactUsForm.valid = '+this.contactUsForm.valid);
  }

  toggleContact() {
    this.appComp.toggleShowHideContactSection();
    this.contactUsForm.reset();
    this.contactUsFormSubmitted = false;
    this.contactUsFormSubmittedEmpty = false;
  }

  submitContact() {
    if( this.contactUsForm.valid ){
      // this.contactUsFormSubmitted = true;
      // this.contactUsFormSubmittedEmpty = false;
      console.warn(this.contactUsForm.value);

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "contact_fullname": this.contactUsForm.value.fullname,
        "contact_email": this.contactUsForm.value.email,
        "contact_role": this.contactUsForm.value.role,
        "contact_message": this.contactUsForm.value.message
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };

      fetch("https://proxy.elevatetalent.group/support/emails", requestOptions)
        .then(response => {
          response.text()
        })
        .then(result => {
          console.log(result)
          console.log('Contact Is Submitted!')
          this.contactUsFormSubmitted = true
          this.contactUsFormSubmittedEmpty = false
          this.contactUsForm.reset()
        })
        .catch(error => {
          console.log('error', error)
        });
    }
    else {
      this.contactUsFormSubmitted = false;
      this.contactUsFormSubmittedEmpty = true;
      this.contactUsFormSubmittedEmptyAnimate = true;
      setTimeout(() => {
        this.contactUsFormSubmittedEmptyAnimate = false;
      }, 300);
      console.warn(this.contactUsForm.value);
      console.error('Contact From is Invalid');
    }
  }

}