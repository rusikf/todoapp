import React, { useState } from 'react'

type addTodo = (title: string) => void

interface Props {
  addTodo: addTodo
}

export const AddTodo: React.FC<Props> = ({addTodo}) => {
  const [title, setTitle] = useState('')
  return (
    <div className="todo-header">
      <h2>Todo app</h2>
      <input 
        type="text" 
        placeholder="New Task..."
        onChange={ e => {setTitle(e.target.value)} }  
      />
      <span className="addList" onClick={ e => {
        if (title.length === 0) { return }
        addTodo(title)
        setTitle('tt')
      }}>Add</span>
  </div>
  )
}
