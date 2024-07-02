import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../store/todo-slice';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    if (editId !== null) {
      const todoToEdit = todos.find(todo => todo.id === editId);
      setInput(todoToEdit ? todoToEdit.text : '');
    }
  }, [editId, todos]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editId !== null) {
      dispatch(updateTodo({
        id: editId,
        text: input
      }));
      setEditId(null);
    } else {
      dispatch(addTodo({
        id: Date.now(),
        text: input,
      }));
    }

    setInput('');
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={handleChange}
      />
      <button type="submit">
        {editId !== null ? 'Update Todo' : 'Add Todo'}
      </button>
      {editId !== null && (
        <button type="button" onClick={handleCancelEdit}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default TodoForm;
