import React, { useState } from 'react'
import { ReactComponent as EditIcon } from '../images/edit-icon.svg'

interface Props {
  todo: Todo,
  toggleTodo: toggleTodo,
  editTodo: editTodo,
  updateTodo: updateTodo
}

export const Todo:React.FC<Props> = ({ todo, toggleTodo, editTodo, updateTodo }) => {
  const [title, setTitle] = useState(todo.title)

  const { edited } = todo

  if (todo.edited) {
    return <li>
      <input type='text' 
        value={title} 
        onChange={e => setTitle(e.target.value)} />
      <input type='button' className='btn-primary' value='Save' onClick={e => updateTodo({ todo, title, edited: false }) }/>
      </li>
  }

  return (
    <li onClick={e => { toggleTodo(todo) } } className={ todo.checked ? 'checked' : undefined }>
    { todo.title }
      <EditIcon onClick = { e => { e.stopPropagation(); editTodo(todo) } 
    }/>
    </li>
    
  )
}
