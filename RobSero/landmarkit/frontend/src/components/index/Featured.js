import React from 'react'
import { Link } from 'react-router-dom'

function Featured(props) {

const featuredBuildings = props

  const featuredImageStyle1 = {
    backgroundImage: `url(${props[0].image})`,
    backgroundSize: 'cover',
    borderRadius: '50%',
    height: 200,
    width: 200,
  }

  const featuredImageStyle2 = {
    backgroundImage: `url(${props[1].image})`,
    backgroundSize: 'cover',
    borderRadius: '50%',
    height: 200,
    width: 200,
  }

  const featuredImageStyle3 = {
    backgroundImage: `url(${props[2].image})`,
    backgroundSize: 'cover',
    borderRadius: '50%',
    height: 200,
    width: 200,
  }


  return (
    <>
      <div className='columns'>
        <div className='column is-half is-offset-one-quarter'>
          <p className='is-size-4 center mt-3'>Featured Landmarks</p>
        </div>
      </div>
      <div className="columns">
      <div className="column">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <Link to={`/buildings/${props[0]._id}`}>
                <div className='circular-featured' style={featuredImageStyle2} />
                <p className='center is-size-5 mb-1'>{props[0].name}</p>
                <p className='center is-size-6 mt-1 subtitle'>{props[0].city}, {props[0].country}</p>
              </Link>
            </div>
          </div>
        </div>
     
      <div className="column">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <Link to={`/buildings/${props[1]._id}`}>
                <div className='circular-featured' style={featuredImageStyle2} />
                <p className='center is-size-5 mb-1'>{props[1].name}</p>
                <p className='center is-size-6 mt-1 subtitle'>{props[1].city}, {props[1].country}</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <Link to={`/buildings/${props[2]._id}`}>
                <div className='circular-featured' style={featuredImageStyle3} />
                <p className='center is-size-5 mb-1'>{props[2].name}</p>
                <p className='center is-size-6 mt-1 subtitle'>{props[2].city}, {props[1].country}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

     
    </>
  )
}

export default Featured




     