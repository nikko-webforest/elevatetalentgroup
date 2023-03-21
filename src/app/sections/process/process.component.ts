import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ProcessComponent implements OnInit {

  processStepsList: any = [
    {
      'count': '01',
      'name': 'Experience Matters',
      'image': '../../../assets/ProcessSection_ProcessImage_01.jpg',
      'details': 'We’ve been there since the beginning. Building and scaling MCN’s, developing creators, connecting brands, crafting global ad campaigns for Fortune 500, and producing films/shows/digital content for decades.'
    },
    {
      'count': '02',
      'name': 'Commitment is in Action',
      'image': '../../../assets/ProcessSection_ProcessImage_02.jpg',
      'details': 'When we partner, we commit to being all-in and we deliver. Every. Time. Our goal is to ensure frictionless success.'
    },
    {
      'count': '03',
      'name': 'Transparency is Mandatory',
      'image': '../../../assets/ProcessSection_ProcessImage_03.jpg',
      'details': 'Let’s be honest, the creator industry is still in its infancy. Communication, pricing, negotiation are all still messy and unstructured. We recognize these realities and focus on total transparency to the process with all parties.'
    },
  ];

  prevProcessIndex: any = (this.processStepsList.length - 1);
  activeProcessIndex: any = 0;
  nextProcessIndex: any = (this.activeProcessIndex + 1);

  constructor() { }

  ngOnInit(): void {
    // console.log('prevProcessIndex = '+this.prevProcessIndex);
    // console.log('activeProcessIndex = '+this.activeProcessIndex);
    // console.log('nextProcessIndex = '+this.nextProcessIndex);
  }

  selectedProcess(index: any) {
    this.activeProcessIndex = index;
    if( index == 0 ){
      this.prevProcessIndex = (this.processStepsList.length - 1);
      this.nextProcessIndex = this.activeProcessIndex + 1;
    }
    else if( index == this.processStepsList.length - 1 ){
      this.prevProcessIndex = this.activeProcessIndex - 1;
      this.nextProcessIndex = 0;
    }
    else {
      this.prevProcessIndex = this.activeProcessIndex - 1;
      this.nextProcessIndex = this.activeProcessIndex + 1;
    }
    // console.log('prevProcessIndex = '+this.prevProcessIndex);
    // console.log('activeProcessIndex = '+this.activeProcessIndex);
    // console.log('nextProcessIndex = '+this.nextProcessIndex);
  }

}
