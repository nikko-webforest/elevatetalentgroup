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
      'image': '../../../assets/ProcessSection_ProcessImage_01.jpg'
    },
    {
      'count': '02',
      'name': 'Comments is in Action',
      'image': '../../../assets/ProcessSection_ProcessImage_02.jpg'
    },
    {
      'count': '03',
      'name': 'Experience Matters',
      'image': '../../../assets/ProcessSection_ProcessImage_03.jpg'
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
