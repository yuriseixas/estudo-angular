import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMakerComponent } from './todo-maker.component';

describe('TodoMakerComponent', () => {
  let component: TodoMakerComponent;
  let fixture: ComponentFixture<TodoMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
