import { Component, OnInit, Input, Output } from '@angular/core';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-input',
  template: `
    <input type = "text" placeholder="todos!" (keyup.enter)="addTodo(input.value.trim())" (keyup.enter)="input.value=''" #input>
  `,
  styles: []
})
export class TodoInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() todos : Todo[]
  @Output() addTodo() = newEventEmitter<string>();



  generateID(){
    return (this.todos ? Math.max(...this.todos.map(todo => todo.id))+1 : 1)
  }


}
