import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() tasks: Array<Task>;
  @Output() toggleTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

}
