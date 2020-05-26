import React from 'react'

function CommentsForm(props) {

  return (
    <div className='columns'>
      <div className='column is-three-fifths is-offset-one-fifth'>
        <form onSubmit={props.handleSubmit}>
          <div className="field">
            <label className="label">Landmark Name</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success" type="textarea" placeholder="Write your thoughts.." name='content' value={props.value} onChange={props.handleInput} />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
            <p className="help is-success">This username is available</p>
          </div>

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

export default CommentsForm