import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map(todo => 
        todo.id === action.payload.id ? action.payload : todo
      );
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    loadTodos: (state) => {
      state.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, loadTodos } = todosSlice.actions;

export default todosSlice.reducer;
