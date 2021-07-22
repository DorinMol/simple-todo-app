import React from 'react'
import Button from '../button/Button'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'

const Header = ({ isOpenForm, onOpenForm }) => {
  const location = useLocation()
  return (
    <header>
      <div className="title">
        <h4>Todo App</h4>
        <Link to="/about">{`> About <`}</Link>
      </div>
      {location.pathname === '/' && (
        <Button
          type="button"
          className={isOpenForm ? 'red' : 'green'}
          value={isOpenForm ? 'Close' : 'Add'}
          onClick={onOpenForm}
        />
      )}
    </header>
  )
}

export default Header
