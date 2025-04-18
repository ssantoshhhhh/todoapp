import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue('');
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className="app-title">To-Do List</h1>
      <div className="mode-toggle">
        <button onClick={toggleTheme}>
          Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <span onClick={() => handleToggleComplete(index)}>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(index)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;