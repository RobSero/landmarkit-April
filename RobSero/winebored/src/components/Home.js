import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <section className="hero hero-background is-success is-fullheight">
      <div className="hero-body is-centered">
        <div className="container center outline-title">
          <h1 className="title">
          Feeling Thirsty?
          </h1>
          <h2 className="subtitle">
          We got you covered
          </h2>
          <Link to='/wines'>
            <h2 className="subtitle">
          Click here to see the selection
            </h2>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home