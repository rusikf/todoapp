import React from 'react'
import { Todo } from './Todo'

interface Props {
  todos: Todo[],
  toggleTodo: toggleTodo,
  editTodo: editTodo,
  updateTodo: updateTodo,
}

export const TodoList: React.FC<Props> = ({todos, toggleTodo, editTodo, updateTodo}) => {
  return (
    <ul className="todo-list">
      { todos.map(todo => (
        <Todo key={todo.title} 
          todo={todo} 
          toggleTodo={toggleTodo} 
          editTodo={editTodo}
          updateTodo={updateTodo}/>
      )) }
    </ul>
  )
}
