import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private toggleContact = new Subject<any>();

  constructor() { }

  sendClickEvent() {
    this.toggleContact.next(0);
    console.log('sendClickEvent = '+this.toggleContact);
  }

  getClickEvent(): Observable<any> {
    console.log('getClickEvent = '+this.toggleContact);
    return this.toggleContact.asObservable();
  }
}
