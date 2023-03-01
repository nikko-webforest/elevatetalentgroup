import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private toggleContact = new Subject<any>();
  private toggleNavMenuBtn = new Subject<any>();

  constructor() { }

  toggleContactComponent() {
    this.toggleContact.next(0);
    this.toggleNavMenuBtn.next(0);
  }

  getContactCompClickEvent(): Observable<any> {
    return this.toggleContact.asObservable();
  }

  getContactNavMenuBtnClickEvent(): Observable<any> {
    return this.toggleNavMenuBtn;
  }
}
