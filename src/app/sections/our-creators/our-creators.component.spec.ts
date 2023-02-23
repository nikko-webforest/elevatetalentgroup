import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCreatorsComponent } from './our-creators.component';

describe('OurCreatorsComponent', () => {
  let component: OurCreatorsComponent;
  let fixture: ComponentFixture<OurCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCreatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
