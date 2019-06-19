import { Component, OnInit, Input } from '@angular/core';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  template: `
  <app-todo-input (keyup.enter)="addTodo($event)"></app-todo-input>

  <app-todo-list [todos] = "todos"></app-todo-list>


  `,
  styles: []
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  todos: Todo[] =[
    {id: 1, content: "HTML", completed: false},
    {id: 2, content: "CSS", completed: true},
    {id: 3, content: "JAVASCRIPT", completed: false}
  ]

  addTodo(value: string){
    this.todos = [{id: this.generateID(), content: value, completed: false}, ...this.todos];

  }

  generateID(){
    return (this.todos ? Math.max(...this.todos.map(todo => todo.id))+1 : 1)
  }




}
