import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { HelpService } from '../help.service';

enum AlertTypes {
  success="success",
  warning="warning",
  error="error"
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnChanges {
  @Input() alert!: any;
  @Output() hideEvent = new EventEmitter<string>();
  showWindow = false;
  message = '';

  constructor(private helpService: HelpService) { }

  ngOnInit(): void {
    this.helpService.alertMessage$.subscribe(data => {
      this.message = data;
      this.showWindow = true;
    })
  }

  hideWindow() {
    this.showWindow = false;
    this.hideEvent.emit('Alert is hided!');
  }

  ngOnChanges() {
    this.showWindow = false;
  }
}
