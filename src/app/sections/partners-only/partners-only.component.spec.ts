import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersOnlyComponent } from './partners-only.component';

describe('PartnersOnlyComponent', () => {
  let component: PartnersOnlyComponent;
  let fixture: ComponentFixture<PartnersOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
