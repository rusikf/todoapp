import React, { useState } from 'react'
import { ReactComponent as EditIcon } from '../images/edit-icon.svg'
import { ReactComponent as RemoveIcon } from '../images/remove-icon.svg'
interface Props {
  todo: Todo,
  updateTodoField: updateTodoField,
  removeTodo: removeTodo
}

export const Todo:React.FC<Props> = ({ todo, updateTodoField, removeTodo }) => {
  const [title, setTitle] = useState(todo.title)
  const handleEdit = (e:any) => {
    e.stopPropagation()
    updateTodoField(todo, { title: 'edited', value: !todo.edited })
  }

  const handleRemove = (e:any) => {
    e.stopPropagation()
    removeTodo(todo.id)
  }

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
    <span className='todo-list__icons'>
    <EditIcon onClick = { e => handleEdit(e) }/>
    <RemoveIcon onClick = { e => handleRemove(e) }/>
    </span> 
    </li>
  )
}
