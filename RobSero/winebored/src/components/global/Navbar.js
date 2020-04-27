import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='is-fluid'>
      <nav className="navbar is-danger" role="navigation" aria-label="main navigation" >
        <div className="navbar-menu">
          <Link className='navbar-item' to='/'>Home</Link>
          <Link className='navbar-item' to='/wines'>WineList</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar