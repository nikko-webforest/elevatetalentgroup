import { Component, OnInit, ViewEncapsulation, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-partners-only',
  templateUrl: './partners-only.component.html',
  styleUrls: ['./partners-only.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PartnersOnlyComponent implements OnInit {

  @Input() animatePartners: any;
  partnersList: any = [
    {
      'title': 'Warner Bros.',
      'logo': '../../../assets/Partners_WarnerBros_logo-78x79.png',
    },
    {
      'title': 'Google',
      'logo': '../../../assets/Partners_Google_logo-143x49.png',
    },
    {
      'title': 'Justice',
      'logo': '../../../assets/Partners_Justice_logo-126x67.png',
    },
    {
      'title': 'Deloitte',
      'logo': '../../../assets/Partners_Deloitte_logo-155x33.png',
    },
    {
      'title': 'Dream Works',
      'logo': '../../../assets/Partners_DreamWorks_logo-142x91.png',
    },
    {
      'title': 'Walmart',
      'logo': '../../../assets/Partners_Walmart_logo-160x44.png',
    },
    {
      'title': 'BVLGARI',
      'logo': '../../../assets/Partners_BVLGARI_logo-224x30.png',
    },
    {
      'title': 'Coca Cola',
      'logo': '../../../assets/Partners_CocaCola_logo-143x49.png',
    },
    {
      'title': 'Warner Bros.',
      'logo': '../../../assets/Partners_WarnerBros_logo-78x79.png',
    },
    {
      'title': 'Sony',
      'logo': '../../../assets/Partners_Sony_logo-124x25.png',
    },
  ];

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    if( this.animatePartners ){
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    
  }
}
