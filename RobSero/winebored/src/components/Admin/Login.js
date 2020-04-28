import React from 'react'
import { logUserIn } from '../../lib/api'
import { setToken } from '../../lib/tokenHandling'

class Register extends React.Component {
state = {
  formInfo: {
    email: '',
    password: ''
  }
}

handleChange = ({ target: { name, value } }) => {
  // console.log(name, value)
  this.setState({ formInfo: {
    ...this.state.formInfo,
    [name]: value
  } })
}

handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const res = await logUserIn(this.state.formInfo)
    const tokenValue = (res.data.token)
    setToken(tokenValue)
    this.props.history.push('/wines')
  } catch (err){
    console.log(err.data)
  }
}

render(){
  return ( 
    <section className='section'>
      <div className='columns is-centered'>
        <form className='column is-one-third' onSubmit={this.handleSubmit}>
          <div className="field">
            <p className="control has-icons-left ">
              <input className="input is-rounded" type="text" placeholder="Email" name='email' onChange={this.handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input is-rounded" type="password" placeholder="Password" name='password' onChange={this.handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-danger">Register</button>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
  
}

}

export default Register