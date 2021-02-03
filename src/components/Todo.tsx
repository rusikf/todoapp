import React from 'react'
import { updateTypePredicateNodeWithModifier } from 'typescript'
import { ReactComponent as EditIcon } from '../images/edit-icon.svg'

interface Props {
  todo: Todo,
  toggleTodo: toggleTodo,
  editTodo: editTodo,
  updateTodo: updateTodo
}

export const Todo:React.FC<Props> = ({ todo, toggleTodo, editTodo, updateTodo }) => {

  if (todo.edited) {
    return <li><input type='text' value={todo.title} onChange={e => updateTodo(todo, e.target.value) } /></li>
  }

  return (
    <li onClick={e => { toggleTodo(todo) } } className={ todo.checked ? 'checked' : undefined }>
    { todo.title }
      <EditIcon onClick = { e => { e.stopPropagation(); editTodo(todo) } 
    }/>
    </li>
    
  )
}
