import React, { useState } from 'react';
import './App.css'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'

const initialTodos: Todo[] = [
  {
    title: 'Ride my bicycle',
    checked: false,
    edited: false
  },
  {
    title: 'Code to do list',
    checked: true,
    edited: false
  },
  {
    title: 'Practice TypeScript',
    checked: false,
    edited: false
  },
  {
    title: 'Take a breakfast',
    checked: false,
    edited: false
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  const addTodo = (title: string) => {
    const newTodos = [...todos, { title, checked: false, edited: false }]
    setTodos(newTodos)
  }

  const editTodo = (todo: Todo) => {
    const newTodos = todos.map(el => { // Todo refactor duplicate code in this methods
      if (el.title === todo.title) { // TODO: add id
        return { ...el, edited: !el.edited }
      }
      return el
    })
        
    setTodos(newTodos)
  }

  const updateTodo = (todo: Todo, title: string) => {
    const newTodos = todos.map(el => {
      if (el.title === title) { // TODO: add id
        return { ...el, edited: !el.edited, title }
      }
      return el
    })
        
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
        <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} updateTodo={updateTodo}/>
      </div>
    </div>
  );
}

export default App;
