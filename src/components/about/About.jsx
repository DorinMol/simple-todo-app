import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <h3>Todo App - playing with react...</h3>
      <Link to="/">Back to the App</Link>
    </div>
  )
}

export default About
