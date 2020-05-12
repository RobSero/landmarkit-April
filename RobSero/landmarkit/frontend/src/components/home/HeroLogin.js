import React from 'react'
import {Link} from 'react-router-dom'
import {isAuthenticated} from '../../lib/authRequests'

function Hero(props) {
 return (
  <section className="hero is-primary is-large hero-background">
  <div className="hero-body">
    <div className="container">
    {!isAuthenticated && <Link to='/register' className="button is-primary">
                <strong>Sign up</strong>
              </Link>}
    </div>
  </div>
</section>
 )
}

export default Hero