import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decreaser',
  template: `
    <button class="decrease" (click) = "minus.emit()">-</button>
    
  `,
  styles: []
})
export class DecreaserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() minus = new EventEmitter<number>();

}
