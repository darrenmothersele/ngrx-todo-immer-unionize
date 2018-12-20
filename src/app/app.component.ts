import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Task } from './interfaces/task.interface';
import { Observable } from 'rxjs';
import { TodoActions } from './todo.actions';

@Component({
  selector: 'app-root',
  template: `
    <section class="section">
        <div class="container">
            <app-new-task (newTask)="onNewTask($event)"></app-new-task>
            <app-todo-list [tasks]="todo$ | async" (toggleTask)="onToggleTask($event)"></app-todo-list>
            <button class="button" (click)="clear()">Clear completed</button>
        </div>
    </section>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  todo$: Observable<Array<Task>>;

  constructor(
    private readonly store: Store<{ todos: Array<Task> }>
  ) {}

  ngOnInit() {
    this.todo$ = this.store.pipe(select('todos'));
  }


  onNewTask(task: Task) {
    this.store.dispatch(TodoActions.NewTask(task));
  }

  onToggleTask({ id }) {
    this.store.dispatch(TodoActions.ToggleTask({ id }));
  }

  clear() {
    this.store.dispatch(TodoActions.ClearCompleted());
  }
}
