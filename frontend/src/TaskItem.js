import React, { useState } from 'react';
import './TaskItem.css';  // Ensure the CSS file exists and styles are defined as per your design

const TaskItem = ({ task, onDelete, onEdit, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
    onEdit(task);
  };

  const handleSave = () => {
    setIsEditing(false);
    onSave({ ...task, title });
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
