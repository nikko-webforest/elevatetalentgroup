import { Component, OnInit, ViewEncapsulation, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-key-to-success',
  templateUrl: './key-to-success.component.html',
  styleUrls: ['./key-to-success.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class KeyToSuccessComponent implements OnInit {

  @Input() animateSuccess: any;
  keyToSuccessList: any = [
    {
      'title': 'Start with common communities',
      'description': 'Which creators have communities that integrate with your brand and your community?',
      'bgColor': '#942094',
      'bgImage': '../../../assets/KeyToSuccess_01_bg-224x166.png',
    },
    {
      'title': 'Add Value',
      'description': 'Start by asking how your product and brand bring value to the community. The sales will follow your value proposition.',
      'bgColor': '#3E30D9',
      'bgImage': '../../../assets/KeyToSuccess_02_bg-184x170.png',
    },
    {
      'title': 'Integrate',
      'description': 'Creator programs are infinately more effective when they are integrated and connected to your whole brand message, media, and strategy.',
      'bgColor': '#85C72C',
      'bgImage': '../../../assets/KeyToSuccess_03_bg-411x467.png',
    },
    {
      'title': 'Think Long Term',
      'description': 'Winning with communities means a commitment to consistency.',
      'bgColor': '#F06C6E',
      'bgImage': '../../../assets/KeyToSuccess_04_bg-241x179.png',
    },
  ];
  
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    if( this.animateSuccess ){
      // this.animateEach();
      this.removeDefaultColor();
    }
  }

  constructor() { }

  ngOnInit(): void {}

  removeDefaultColor() {
    setTimeout(() => {
      document.querySelectorAll('.etg-key-to-success .etg-row .etg-col').forEach((li: any, i: any) => {
        setTimeout(() => {
          li.classList.remove('default-color');
        }, 1000 * i);
      });
    }, 2000);
  }

}
