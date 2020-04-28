import React from 'react'
import { signUserUp } from '../../lib/api'


class Register extends React.Component {
state = {
  formInfo: {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
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
    const res = await signUserUp(this.state.formInfo)
    console.log(res)
    this.props.history.push('/login')
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
              <input className="input is-rounded" type="text" placeholder="Username" name='username' onChange={this.handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>

          <div className="field">
            <p className="control has-icons-left ">
              <input className="input is-rounded" type="email" placeholder="Email" name='email' onChange={this.handleChange} />
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
            <p className="control has-icons-left">
              <input className="input is-rounded" type="password" placeholder="Confirm Password" name='passwordConfirmation' onChange={this.handleChange} />
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