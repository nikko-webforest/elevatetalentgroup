import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  contactEmail: any = 'INFO@ELEVATE-M.COM';
  contactAddress: any = '733 F Lakeview Plaza Blvd Columbus, OH 43085';
  copyrightYear: any;
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

  constructor() { }

  ngOnInit(): void {
    this.copyrightYear = this.getCurrentYear();
  }

  getCurrentYear() {
    var year = new Date();
    // console.log('year.getFullYear = '+year.getFullYear());
    return year.getFullYear();
  }

}
