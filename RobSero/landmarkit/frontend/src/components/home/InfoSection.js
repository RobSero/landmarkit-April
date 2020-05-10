import React from 'react'

function InfoSection(props) {
  return (
    <div className="columns mt-3">
      <div className="column">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <img src='../../assets/placeholder.png' />
            <p className='center'>Check out sweet landmarks from around the world</p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <img src='../../assets/placeholder.png' />
            <p className='center'>Add them to your wishlist and review them</p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <img src='../../assets/placeholder.png' />
            <p className='center'>Explore them and mark it down!</p>
          </div>
        </div>
      </div>
    



    </div>
  )
}

export default InfoSection