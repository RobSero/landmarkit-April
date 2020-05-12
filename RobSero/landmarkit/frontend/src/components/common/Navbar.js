import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {isAuthenticated, logout} from '../../lib/authRequests'


class Navbar extends React.Component {
  state = {
    isAuth: false
  }

  handleLogout = () => {
    logout()
    this.props.history.push('/')
  }

  render(){
    return (
      <div>
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand main-title">
        <Link className='noDeco' to='/' >
          <p className='noDeco main-title'>landMARKIT</p>
        </Link>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {!isAuthenticated() && <Link to='/register' className="button is-primary">
                <strong>Sign up</strong>
              </Link>}
              {!isAuthenticated() && <Link to='/login' className="noDeco button is-light">
                Log in
              </Link>}
              {isAuthenticated() && <button onClick={this.handleLogout} className="noDeco button is-light">
                Log Out
              </button>}
            </div>
          </div>
        </div>
      </div>
    </nav>


    <nav className="navbar is-light mini-nav-bar" role="navigation" aria-label="main navigation">
  <div className="navbar-menu">
  <Link to='/buildings' className="navbar-item low-padding">Landmark List</Link>
  {isAuthenticated() && <Link to='/wishlist' className="navbar-item low-padding">My Wishlist</Link>}
  {isAuthenticated() &&<Link to='/buildings/new' className="navbar-item low-padding">Add Landmark</Link>}
  <Link to='/buildings/new' className="navbar-item low-padding">Landmark Quiz??</Link>
  </div>
</nav>
</div>
    )
  }
}

export default withRouter(Navbar) 