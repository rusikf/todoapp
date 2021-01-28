import React from 'react'
import { Todo } from './Todo'

interface Props {
  todos: Todo[],
  toggleTodo: toggleTodo
}

export const TodoList: React.FC<Props> = ({todos, toggleTodo}) => {
  return (
    <ul className="todo-list">
      { todos.map(todo => (
        <Todo key={todo.title} todo={todo} toggleTodo={toggleTodo}/>
      )) }
    </ul>
  )
}
