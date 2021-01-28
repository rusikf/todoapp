import React from 'react';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="todo-header">
          <h2>YouDo List</h2>
          <input type="text" id="input" placeholder="New Title..." />
          <span className="addList">Add</span>
        </div>
        <ul className="todo-list">
          <li>Walk dog</li>
          <li className="checked">Code to-do list</li>  
          <li>Study for bio exam</li>
          <li>Do groceries</li>
          <li>Pickup stephanie</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
