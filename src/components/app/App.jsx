import React, { useEffect, useState } from 'react'
import './App.css'
import Header from '../header/Header'
import About from '../about/About'
import Todos from '../todos/Todos'
import AddTodo from '../addTodo/AddTodo'
import * as http from '../../services/http'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
  const [todos, setTodos] = useState([])
  const [isOpenForm, setIsOpenForm] = useState(false)

  useEffect(() => {
    getAllTodos()
  }, [])

  const getAllTodos = async () => setTodos(await http.getTodos())

  const handleAddTodo = async (todo) => {
    const savedTodo = await http.addTodo(todo)
    setTodos([...todos, savedTodo])
  }

  const handleUpdateTodo = async (todo) => {
    todo.completed = !todo.completed
    await http.updateTodo(todo)
    const todosUpdate = todos.map((t) => (t.id === todo.id ? todo : t))
    setTodos(todosUpdate)
  }

  const handleDeleteTodo = async (todo) => {
    await http.deleteTodo(todo.id)
    const todosUpdated = todos.filter((t) => t.id !== todo.id)
    setTodos(todosUpdated)
  }

  const handleOpenForm = () => {
    setIsOpenForm(!isOpenForm)
  }
  return (
    <BrowserRouter>
      <div className="container">
        <Header isOpenForm={isOpenForm} onOpenForm={handleOpenForm} />
        {isOpenForm && <AddTodo onAddTodo={handleAddTodo} />}
        <Route
          path="/"
          exact={true}
          render={() => (
            <Todos
              todos={todos}
              onUpdate={handleUpdateTodo}
              onDelete={handleDeleteTodo}
            />
          )}
        />
        <Route path="/about" exact={true} component={About} />
      </div>
    </BrowserRouter>
  )
}

export default App
