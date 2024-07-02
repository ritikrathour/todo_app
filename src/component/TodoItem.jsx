
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo,updateTodo } from '../store/todo-slice';
import { useState } from 'react'; 

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [input, setInput] = useState(todo.text);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    dispatch(updateTodo({
      id: todo.id,
      text: input,
    }));
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setInput(todo.text);
  }; 

  return (
    <div className="todo-item">
      {editMode ? (
        <>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
          />
          <div className="flex">
          <button className='save_btn' onClick={handleSave}>Save</button>
          <button className='cancel_btn' onClick={handleCancel}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <div className="flex">
          <button className='edit_btn' onClick={handleEdit}>Edit</button>
          <button className='delete_btn' onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(TodoItem);
