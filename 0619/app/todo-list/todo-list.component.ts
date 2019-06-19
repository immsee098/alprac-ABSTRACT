import { Component, OnInit, Input } from '@angular/core';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  template: `
  <ul>
  <li *ngFor="let todo of todos">
  <input type="checkbox" [checked]="todo.completed">
  {{todo.content}}{{todo.id}}
  <button (click)="removeTodo(todo.id)">x</button>
  </li>
  </ul>
  `,
  styles: []
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() todos : Todo[]
  


  removeTodo(id: number){
    this.todos = this.todos.filter(todo => (todo.id) !== id)
    console.log(id)
    
  }

}
