import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='is-fluid'>
      <nav className="navbar is-danger" role="navigation" aria-label="main navigation" >
        <div className="navbar-menu">
          <Link className='navbar-item' to='/'>Home</Link>
          <Link className='navbar-item' to='/wines'>WineList</Link>
          <Link className='navbar-item' to='/wines/new'>New Wines</Link>
        </div>
        <div className="navbar-end">
          <div className='navbar-item buttons'>
            <Link className='navbar-item button is-primary' to='/register'>Register</Link>
            <Link className='navbar-item button is-primary' to='/login'>Log In</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar