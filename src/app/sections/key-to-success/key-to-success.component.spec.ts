import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyToSuccessComponent } from './key-to-success.component';

describe('KeyToSuccessComponent', () => {
  let component: KeyToSuccessComponent;
  let fixture: ComponentFixture<KeyToSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyToSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyToSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
