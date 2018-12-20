import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../interfaces/task.interface';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  @Output() newTask = new EventEmitter<Task>();

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const id = (Date.now()).toString(36);
      this.newTask.emit({ ...this.form.getRawValue(), id, done: false });
      this.form.reset();
    }
  }
}
