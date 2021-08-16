import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  @Input() list: any;

  @Output()
  onRemove = new EventEmitter();

  removeTask(id: number) {
    this.onRemove.emit(id);
  }

  constructor() {}

  ngOnInit(): void {}
}
