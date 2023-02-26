import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNavigatorComponent } from './section-navigator.component';

describe('SectionNavigatorComponent', () => {
  let component: SectionNavigatorComponent;
  let fixture: ComponentFixture<SectionNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
