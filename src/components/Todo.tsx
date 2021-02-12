import React, { useState } from 'react'
import { ReactComponent as EditIcon } from '../images/edit-icon.svg'

interface Props {
  todo: Todo,
  updateTodoField: updateTodoField
}

export const Todo:React.FC<Props> = ({ todo, updateTodoField }) => {
  const [title, setTitle] = useState(todo.title)

  if (todo.edited) {
    return <li>
      <input type='text' 
        value={title} 
        onChange={e => setTitle(e.target.value)} />
      <input type='button' className='btn-primary' value='Save' onClick={e => {
        updateTodoField(todo, { title: 'title', value: title }) 
        updateTodoField(todo, { title: 'edited', value: false }) 
      }}/>
      </li>
  }

  return (
    <li onClick={e => { updateTodoField(todo, { title: 'checked', value: !todo.checked }) } } className={ todo.checked ? 'checked' : undefined }>
    { todo.title }
      <EditIcon onClick = { e => { e.stopPropagation(); updateTodoField(todo, { title: 'edited', value: !todo.edited }) } 
    }/>
    </li>
    
  )
}
