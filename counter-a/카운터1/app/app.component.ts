import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <button class="increase" (click) = "increaser()">+</button>
  <div class="counter">{{counter}}</div>
  <button class="decrease" (click)= "decreaser()">-</button>
  `,
  styles: [
  ]
})
export class AppComponent {
  title = 'Couter1';
  counter = 0;

  increaser() {
    this.counter++
    
  }

  decreaser() {
    if(this.counter>0) this.counter--
    
  }
}
