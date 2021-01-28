import React, { useState } from 'react';
import './App.css'
import { AddTodo } from './features/todos/AddTodo'
import { TodoList } from './features/todos/TodoList'

const initialTodos: Todo[] = [
  {
    title: 'Ride my bicycle',
    checked: false
  },
  {
    title: 'Code to do list',
    checked: true
  },
  {
    title: 'Practice TypeScript',
    checked: false
  },
  {
    title: 'Take a breakfast',
    checked: false
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  const addTodo = (title: string) => {
    const newTodos = [...todos, { title, checked: false }]
    setTodos(newTodos)
  }

  const toggleTodo = (todo: Todo) => {
    const newTodos = todos.map(el => {
      if (el.title === todo.title) { // TODO: add id
        return { ...el, checked: !el.checked }
      }
      return el
    })
        
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div className="container">
        <AddTodo addTodo={addTodo}/>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
      </div>
    </div>
  );
}

export default App;
