
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import { loadTodos } from './store/todo-slice';
import './index.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
