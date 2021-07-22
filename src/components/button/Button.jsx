import React from 'react'
import './Button.css'

const Button = ({ type, value, onClick, className }) => {
  const classNames = `button ${className || ''}`
  return (
    <input className={classNames} type={type} value={value} onClick={onClick} />
  )
}

export default Button
