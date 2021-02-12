import React from 'react'
import { Todo } from './Todo'

interface Props {
  todos: Todo[],
  updateTodoField: updateTodoField
}

export const TodoList: React.FC<Props> = ({todos, updateTodoField}) => {
  return (
    <ul className="todo-list">
      { todos.map(todo => (
        <Todo key={todo.id} 
          todo={todo} 
          updateTodoField={updateTodoField}
          />
      )) }
    </ul>
  )
}
