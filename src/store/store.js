import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../store/todo-slice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
