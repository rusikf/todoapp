import React from 'react'

interface Props {
  todo: Todo,
  toggleTodo: toggleTodo
}

export const Todo:React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li onClick={e => { toggleTodo(todo) } } className={ todo.checked ? 'checked' : undefined }>{ todo.title }</li>
  )
}
