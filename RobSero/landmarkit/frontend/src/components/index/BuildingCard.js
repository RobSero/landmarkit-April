import React from 'react'
import { Link } from 'react-router-dom'
import {isAuthenticated} from '../../lib/authRequests'

function BuildingCard(props) {


  return (
    <article className="media mt-4">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={props.image} alt={props.name} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <Link to={`/buildings/${props._id}`}>
            <p>
              <strong>{props.name}</strong> <small>{`${props.city}, ${props.country} `}</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
          </Link>
        </div>
      </div>
      <div className="media-right">
        {isAuthenticated() && <button className="delete"></button>}
      </div>
    </article>
  )
}







export default BuildingCard