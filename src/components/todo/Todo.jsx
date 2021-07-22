import React from 'react'
import { FaCheckCircle, FaWrench, FaTimesCircle } from 'react-icons/fa'
import './Todo.css'

const Todo = ({ todo, onDelete, onUpdate }) => {
  return (
    <div
      className="todo"
      onDoubleClick={() => {
        onUpdate(todo)
      }}
    >
      <div className="todo-content">
        <i className="picture">
          {todo.completed ? <FaCheckCircle /> : <FaWrench />}
        </i>
        <span className="text">{todo.title}</span>
      </div>
      <i className="delete" onClick={() => onDelete(todo)}>
        <FaTimesCircle />
      </i>
    </div>
  )
}

export default Todo
