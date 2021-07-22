import React, { useState } from 'react'
import { FaListAlt } from 'react-icons/fa'
import Button from '../button/Button'
import './AddTodo.css'

const AddTodo = ({ onAddTodo }) => {
  const [todo, setTodo] = useState({ title: '', completed: false })

  const addTodo = (e) => {
    e.preventDefault()
    if (!todo.title.length)
      return alert('Set a todo description before adding...')
    onAddTodo(todo)
    setTodo({ ...todo, title: '' })
  }

  const _setTodoHelper = (title) => {
    const todoToSave = { ...todo }
    todoToSave.title = title
    setTodo(todoToSave)
  }

  return (
    <div className="form-container">
      <form onSubmit={addTodo}>
        <div className="todo-input">
          <i className="picture">
            <FaListAlt />
          </i>
          <input
            type="text"
            value={todo.title}
            onChange={(e) => _setTodoHelper(e.currentTarget.value)}
            placeholder="Todo Description"
          />
        </div>
        <Button type="submit" value="Add Todo" />
      </form>
    </div>
  )
}

export default AddTodo
