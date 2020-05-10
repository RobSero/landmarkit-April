import React from 'react'
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  state = {

  }


  render(){
    return (
      <div>
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand main-title">
        <Link className='noDeco' to='/' >
          <p className='noDeco main-title'>landMARKIT</p>
        </Link>
    
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to='/register' className="button is-primary">
                <strong>Sign up</strong>
              </Link>
              <Link to='/login' className="noDeco button is-light">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>


    <nav className="navbar is-light mini-nav-bar" role="navigation" aria-label="main navigation">
  <div className="navbar-menu">
  <Link to='/buildings' className="navbar-item low-padding">Landmark List</Link>
  <Link to='/wishlist' className="navbar-item low-padding">My Wishlist</Link>
  </div>
</nav>

</div>
    )
  }
}

export default Navbar