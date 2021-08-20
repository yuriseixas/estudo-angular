import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo List';

  list: any[] = [];

  addTodo(todo: any) {
    //this.list.push({ id: this.list.length, name: todo });
    this.list[this.list.length] = { id: this.list.length, name: todo };
  }

  removeTodo(id: number) {
    this.list = this.list.filter((todo: { id: number }) => todo.id !== id);
  }
}
