import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../todo/Todo'

const Todos = ({ todos, onUpdate, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
          key={todo.id}
        />
      ))}
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array,
}

export default Todos
