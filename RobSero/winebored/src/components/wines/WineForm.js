import React from 'react'

function WineForm(props) {
  return (
    <section className='section'>
      <div className='columns is-centered'>
        <form className='column is-one-third' onSubmit={props.handleSubmit}>

          <div className="field">
            <input className="input is-rounded" type="text" placeholder="Wine Name" name='name' onChange={props.handleChange} value={props.wineInfo.name}/>
          </div>

          <div className="field">
            <input className="input is-rounded" type="text" placeholder="Origin" name='origin' onChange={props.handleChange} value={props.wineInfo.origin} />
          </div>

          <div className="field">
            <input className="input is-rounded" type="text" placeholder="Wine Image URL" name='image' onChange={props.handleChange} value={props.wineInfo.image} />
          </div>

          <div className="field">
            <textarea className="textarea is-rounded" type="text" placeholder="What sort of notes and smells are in this wine??" name='tastingNotes' onChange={props.handleChange} value={props.wineInfo.tastingNotes} />
          </div>

          <div className="field">
            <input className="input is-rounded" type="text" placeholder="Grape Type" name='grape' onChange={props.handleChange} value={props.wineInfo.grape} />
          </div>

          <div className="field">
            <input className="input is-rounded" type="number" placeholder="abv" name='abv' onChange={props.handleChange} value={props.wineInfo.abv} />
          </div>

          <div className="field">
            <input className="input is-rounded" type="number" placeholder="Price" name='price' onChange={props.handleChange} value={props.wineInfo.price} />
          </div>
          <div className="field">
            <button className="button is-danger">{props.buttonText}</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default WineForm