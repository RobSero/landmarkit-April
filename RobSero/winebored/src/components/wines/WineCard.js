import React from 'react'
import { Link } from 'react-router-dom'

function WineCard({ _id, name, image, price, origin }) {
  return (
    <div className='column is-one-third-desktop'>
      <div className="card">
        <Link to={`/wines/${_id}`}>
          <div className='card-header'>
            <h3 className='card-header-title'>{name}</h3>
          </div>
          <div className="card-image">
            <div className="image is-4by3">
              <img src={image} alt="Placeholder image" />
            </div>
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="title is-4">{origin}</p>
              <p className="subtitle is-6">{`only £${price}`}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default WineCard