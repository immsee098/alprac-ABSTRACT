import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-increaser (plus) = "increaser($event)"></app-increaser>
  {{countnum}}
  <app-decreaser (minus)="decreaser($event)"></app-decreaser>
  `,
  styles: []
})
export class AppComponent {
  title = 'Counter3';

  countnum = 0;

  increaser() {
    this.countnum++
  }

  decreaser() {
    if(this.countnum>0) this.countnum--
  }


}
