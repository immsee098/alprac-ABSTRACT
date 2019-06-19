import { Component } from '@angular/core';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  template: `

  <app-todos></app-todos>

    
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-Todos';

 }
