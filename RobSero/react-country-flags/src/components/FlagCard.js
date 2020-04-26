import React from 'react'



function FlagCard(props) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <div className="card ">
        <header className="card-header is-primary">
          <p className="card-header-title">{props.name}</p>
        </header>
        <div className="card-image">
          <div className="image is-4by3">
            <img src={props.flag} alt="Placeholder image" />
          </div>
        </div>
        <div className="card-content">
          <p className="content">{props.nativeName}</p>
          <p className="content">{props.region}</p>
        </div>
      </div>
    </div>
  )
}

export default FlagCard
