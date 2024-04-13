import React, { useState } from 'react';
import './TaskForm.css';  // Ensure the CSS file exists and styles are defined as per your design

const TaskForm = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent adding empty tasks
    addTask(input);
    setInput(''); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
