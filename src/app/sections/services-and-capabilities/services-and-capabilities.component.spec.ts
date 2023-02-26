import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullServicesComponent } from './services-and-capabilities.component';

describe('FullServicesComponent', () => {
  let component: FullServicesComponent;
  let fixture: ComponentFixture<FullServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
