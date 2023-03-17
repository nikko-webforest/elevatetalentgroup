import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FooterComponent implements OnInit {

  @Input() contactEmail: any;
  @Input() contactNumber: any;
  @Input() contactAddress: any;
  @Input() socialMediaList: any;
  
  copyrightYear: any;

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
