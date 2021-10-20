import { Component } from '@angular/core';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {

  constructor(private helpService: HelpService) { }

  sendMessage(val: string) {
    this.helpService.nextMessage(val);
  }
}
