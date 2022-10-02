import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.css'],
})
export class InsideComponent implements OnInit {
  @Input() getMessage: string = '';
  @Output() outMessage = new EventEmitter<string>();
  constructor() {}

  btnClicked() {
    this.outMessage.emit('true');
  }

  ngOnInit(): void {}
}
