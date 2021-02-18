import React from 'react'
import { Todo } from './Todo'

interface Props {
  todos: Todo[],
  removeTodo: removeTodo,
  updateTodoField: updateTodoField
}

export const TodoList: React.FC<Props> = ({todos, removeTodo, updateTodoField}) => {
  return (
    <ul className="todo-list">
      { todos.map(todo => (
        <Todo key={todo.id} 
          todo={todo} 
          removeTodo={removeTodo}
          updateTodoField={updateTodoField}
          />
      )) }
    </ul>
  )
}
