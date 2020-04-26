import React from 'react'



function SearchBar(props) {




  return (
    
    <div className="field has-addons has-addons-right notification">
      <p className="control">
        <span className="select">
          <select onChange={props.change}>
            <option value='all'>All</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
          </select>
        </span>
      </p>
      <p className="control">
        <input className="input" type="text" placeholder="Find a Country!" onChange={props.change} />
      </p>
      <p className="control">
        <a className="button is-primary">
      Find
        </a>
      </p>
    </div>
   
  
  )
}

export default SearchBar


