import React from 'react'
import ImageUpload from '../../lib/ImageUpload'



function BuildingForm(props) {

  return (
    <div className='columns'>
      <div className='column is-three-fifths is-offset-one-fifth'>
        <form onSubmit={props.handleSubmit}>
          <div className="field">
            <label className="label">Landmark Name</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="text" placeholder="Name" name='name' value={props.name} onChange={props.handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
            <p className="help is-success">This username is available</p>
          </div>

          <div className="field">
            <label className="label">City</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-danger" type="text" placeholder="Where in the world is it!" name='city' value={props.city} onChange={props.handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Country</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-danger" type="text" placeholder="Country" name='country' value={props.country} onChange={props.handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Landmark Age</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-danger" type="number" placeholder="Age" name='age' value={props.age} onChange={props.handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Visitors Per Year</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-danger" type="number" placeholder="Vistitor Estimate" name='visitorsPerYear' value={props.visitorsPerYear} onChange={props.handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

       <ImageUpload onChange={props.handleChange}/>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-dark" type='submit'>Submit</button>
            </div>
            <div className="control">
              <a href='/' className="button is-light">Cancel</a>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default BuildingForm