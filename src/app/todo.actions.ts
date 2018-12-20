import { unionize, ofType } from 'unionize';
import { Task } from './interfaces/task.interface';

export const TodoActions = unionize({
  NewTask: ofType<Task>(),
  ToggleTask: ofType<{ id: string }>(),
  ClearCompleted: {}
}, { tag: 'type', value: 'payload' });
