import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoMakerComponent } from './todo-maker/todo-maker.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TodoMakerComponent, ListTodosComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
