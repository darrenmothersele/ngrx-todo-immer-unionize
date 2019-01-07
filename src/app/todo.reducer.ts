import { TodoActions } from './todo.actions';
import { Task } from './interfaces/task.interface';
import produce from 'immer';

export const initialState: Array<Task> = [];

export const producer = (draft, action) => TodoActions.match(action, {
  NewTask: task => {
    draft.push(task);
  },
  ToggleTask: ({ id }) => {
    const task = draft.find(t => t.id === id);
    task.done = !task.done;
  },
  ClearCompleted: () => draft.filter(task => !task.done),
  default: () => {}
});

export const reducerProducer = produce(producer, initialState);

export function reducer(state, action) {
  return reducerProducer(state, action);
}
