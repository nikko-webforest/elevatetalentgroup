import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAndCapabilitiesComponent } from './services-and-capabilities.component';

describe('ServicesAndCapabilitiesComponent', () => {
  let component: ServicesAndCapabilitiesComponent;
  let fixture: ComponentFixture<ServicesAndCapabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesAndCapabilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAndCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
