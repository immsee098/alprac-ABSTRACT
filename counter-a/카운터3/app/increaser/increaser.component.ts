import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increaser',
  template: `
  <button class="increase" (click) = "plus.emit()">+</button>
  `,
  styles: []
})
export class IncreaserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() plus = new EventEmitter<number>();
}
