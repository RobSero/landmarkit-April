import React from 'react'
import RegisterForm from './RegisterForm'
import { registerUser } from '../../lib/authRequests'

class Register extends React.Component {
  state = {
    userForm: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation : ''
    }
  }

  handleChange = ({target}) => {
    console.log(target.name)
    console.log(target.value)
    this.setState({
      userForm: {
        ...this.state.userForm,
        [target.name]: target.value
      }
    })
    
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submitted')
    try {
      const res = await registerUser(this.state.userForm)
      if(!res){
        throw new Error()
      }
      this.props.history.push('/login')
    } 
    catch(err){
      console.log(err.message);
      
    }
  }

  render() {
    return (
    
        <div className='columns'>
          <div className='column is-half mt-5'>
            <RegisterForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...this.state.userForm} />
          </div>
          <div className='column is-one-half'>
            <img src='../../assets/registerPic.jpg' alt='register hello!' />
          </div>
        </div>
      
    )
  }
}

export default Register