import React from 'react'
import { Link } from 'react-router-dom'
import {isAuthenticated, isUser} from '../../lib/authRequests'

function BuildingComment(props) {
 const user = props.user

  return (
    <article className="media mt-4">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={props.user.image} alt={props.user.username} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          
            <p>
              <strong>{props.user.username}</strong> <small>{props.updatedAt}</small>
              <br />
              {props.content}
              </p>
          
        </div>
      </div>
      <div className="media-right">
        {(isUser(props.admin._id) || isUser(props.user._id)) && <button className="delete"></button>}
      </div>
    </article>
  )
}







export default BuildingComment