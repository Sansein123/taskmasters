import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import './Tasks.css';  // Ensure the CSS file exists and styles are defined as per your design

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [draftTitle, setDraftTitle] = useState('');

  const addTask = (title) => {
    const newTask = {
      id: Date.now(), // Simple unique ID
      title,
      description: '' // Default empty description
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const startEditTask = (task) => {
    setEditingId(task.id);
    setDraftTitle(task.title);
  };

  const saveTask = (task) => {
    const updatedTasks = tasks.map(t => {
      if (t.id === editingId) {
        return { ...t, title: draftTitle };
      }
      return t;
    });
    setTasks(updatedTasks);
    setEditingId(null);
  };

  return (
    <div className="tasks-container">
      <TaskForm addTask={addTask} />
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={deleteTask} onEdit={() => startEditTask(task)} onSave={saveTask} />
      ))}
    </div>
  );
};

export default Tasks;
