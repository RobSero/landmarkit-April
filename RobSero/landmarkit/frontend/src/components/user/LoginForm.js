import React from 'react'



function LoginForm(props){

  return (
    <div className='columns'>
<div className='column is-three-fifths is-offset-one-fifth'>
      <form onSubmit={props.handleSubmit}>
      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
        <input className="input is-success" type="text" placeholder="Username" name='username' value={props.username} onChange={props.handleChange} />
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
        <label className="label">Password</label>
        <div className="control has-icons-left has-icons-right">
        <input className="input is-danger" type="password" placeholder="Password" name='password' value={props.password} onChange={props.handleChange} />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p className="help is-danger">This email is invalid</p>
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

export default LoginForm