import React, { useState } from 'react';
import './App.css'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import { v4 as uuidv4 } from 'uuid'
const initialTodos: Todo[] = [
  {
    title: 'Ride my bicycle',
    checked: false,
    edited: false,
    id: uuidv4()
  },
  {
    title: 'Code to do list',
    checked: true,
    edited: false,
    id: uuidv4()
  },
  {
    title: 'Practice TypeScript',
    checked: false,
    edited: false,
    id: uuidv4()
  },
  {
    title: 'Take a breakfast',
    checked: false,
    edited: false,
    id: uuidv4() 
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  const addTodo = (title: string) => {
    const newTodos = [...todos, { title, checked: false, edited: false, id: uuidv4() }]
    setTodos(newTodos)
  }

  const updateTodoField = (todo: Todo, { title, value }: { title: string, value: any }) => {
    const newTodos = todos.map(el => { 
      return el.id === todo.id ? { ...el, [title]: value } : el
    })
    setTodos(newTodos)
  } 

  const removeTodo = (id: string) => {
    const newTodos = todos.filter(el => el.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div className="container">
        <AddTodo addTodo={addTodo}/>
        <TodoList todos={todos} removeTodo={removeTodo} updateTodoField={updateTodoField}/>
      </div>
    </div>
  );
}

export default App;
