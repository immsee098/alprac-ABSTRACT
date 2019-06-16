import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-counter [counter] = "countnum" (plus) = "increaser($event)" (minus)="decreaser($event)"></app-counter>
  
  `,
  styles: []
})
export class AppComponent {
  title = 'Counter2';
  countnum = 0;

  increaser() {
    this.countnum++
  }

  decreaser() {
    if(this.countnum>0) this.countnum--
  }


}
