import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private toggleContact = new Subject<any>();

  constructor() { }

  sendClickEvent() {
    // console.log('sendClickEvent = '+this.toggleContact);
    this.toggleContact.next(0);
  }

  getClickEvent(): Observable<any> {
    // console.log('getClickEvent = '+this.toggleContact);
    return this.toggleContact.asObservable();
  }
}
