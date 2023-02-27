import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, Input } from '@angular/core';
import * as Flickity from 'flickity';

@Component({
  selector: 'app-our-creators',
  templateUrl: './our-creators.component.html',
  styleUrls: ['./our-creators.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OurCreatorsComponent implements OnInit {

  @Input() animateCreatorsEl: any;
  carousel: any | undefined;
  carouselMain: any | undefined;
  carouselSlides: any = [
    {
      'title': 'GAMING',
      'titleColor': '#FFFFFF',
      'bgColor': '#21169A',
      'bgImage': '../../../assets/OurCreators_Gaming_bg-image.png',
      'bgIcon': '../../../assets/OurCreators_Gaming_bg-icon.png'
    },
    {
      'title': 'ENTERTAINMENT MUSIC AND POP CULTURE',
      'titleColor': '#FFFFFF',
      'bgColor': '#DB5352',
      'bgImage': '../../../assets/OurCreators_Entertainment_bg-image.png',
      'bgIcon': '../../../assets/OurCreators_Entertainment_bg-icon.png'
    },
    {
      'title': 'FAMILY TWEEN & KIDS',
      'titleColor': '#FFFFFF',
      'bgColor': '#4A104A',
      'bgImage': '../../../assets/OurCreators_Family_bg-image.png',
      'bgIcon': '../../../assets/OurCreators_Family_bg-icon.png'
    },
    {
      'title': 'TRAVEL',
      'titleColor': '#FFFFFF',
      'bgColor': '#71BB0D',
      'bgImage': '../../../assets/OurCreators_Travel_bg-image.png',
      'bgIcon': '../../../assets/OurCreators_Travel_bg-icon.png'
    },
    {
      'title': 'SPORTS',
      'titleColor': '#030414',
      'bgColor': '#F9F7FB',
      'bgImage': '../../../assets/OurCreators_Sports_bg-image.png',
      'bgIcon': '../../../assets/OurCreators_Sports_bg-icon.png'
    },
  ];

  @ViewChild('carousel', {static: true}) private Carousel: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.initFlickity();  
  }

  initFlickity() {
    this.carouselMain = this.Carousel.nativeElement;
    this.carousel = new Flickity(this.carouselMain, {
      contain: true,
      cellAlign: 'left',
      adaptiveHeight: true,
      prevNextButtons: false,
      pageDots: false
    });
    console.log(this.carousel);
  }

}
