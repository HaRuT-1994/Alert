import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AlertOptions } from './shared/alert-options.interface';
import { AlertTypes } from './shared/alert-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public alertOption: AlertOptions[] = [
    {type: AlertTypes.success, message: 'This is success message'},
    {type: AlertTypes.warning, message: 'This is warning message'},
    {type: AlertTypes.error, message: 'This is error message'}
  ];
  public renderAlert = this.alertOption[0];

  selectChangeHandler(e: any): void {
    switch(e.target.value) {
      case 'success':
        this.renderAlert = this.alertOption[0];
        break;
      case 'warning':
        this.renderAlert = this.alertOption[1];
        break;
      case 'error':
        this.renderAlert = this.alertOption[2];
        break;
    }
  }

  getMessage(val: string) {
    console.log(val);
  }
}
