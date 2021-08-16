import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-maker',
  templateUrl: './todo-maker.component.html',
  styleUrls: ['./todo-maker.component.css'],
})
export class TodoMakerComponent implements OnInit {
  @Output()
  onCreate = new EventEmitter();

  todo: any;

  createTodo() {
    this.onCreate.emit(this.todo);
    this.todo = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
