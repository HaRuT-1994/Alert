import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  private message = new Subject<string>();
  alertMessage$ = this.message.asObservable();
  
  nextMessage(message: string) {
    this.message.next(message)
  }

}
