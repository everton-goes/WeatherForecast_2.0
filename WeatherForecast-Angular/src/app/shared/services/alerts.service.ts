import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  private subject = new Subject<any>();

  constructor() { }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  alert(type: string, message: string) {
    this.subject.next({tipo: type, msg: message});
  }
}
