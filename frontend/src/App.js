import React from 'react';
import Tasks from './Tasks';
import './App.css';  // Ensure the CSS file exists and styles are defined as per your design

const App = () => {
  return (
    <div className="app-container">
      <h1>My To-Do List</h1>
      <Tasks />
    </div>
  );
};

export default App;
