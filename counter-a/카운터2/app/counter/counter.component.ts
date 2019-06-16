import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div class="container">
    <button class="increase" (click) = "plus.emit()">+</button>
    <div class="counter">{{counter}}</div>
    <button class="decrease" (click) = "minus.emit()">-</button>
  </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() counter = Number;
  @Output() plus = new EventEmitter<number>();
  @Output() minus = new EventEmitter<number>();
 
}
