import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  parentMessage: string = '';
  clicked: boolean = false;

  buttonClicked(value: string) {
    this.parentMessage = 'Message from parent component: ' + value;
  }

  childChanged(value: string) {
    this.clicked = Boolean(value);
  }
}
