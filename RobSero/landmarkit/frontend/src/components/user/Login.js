import React from 'react'
import LoginForm from './LoginForm'
import { loginUser, setToken } from '../../lib/authRequests'

class Login extends React.Component {
  state = {
    userForm: {
      username: '',
      password: '',
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
      const res = await loginUser(this.state.userForm)
      const tokenData = res.data.token
      setToken(tokenData)
      this.props.history.push('/buildings')
    } 
    catch(err){
      console.log(err);
      
    }
  }
  render() {
    return (
    
        <div className='columns'>
          <div className='column is-half mt-5'>
            <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...this.state.userForm} />
          </div>
          <div className='column is-one-half'>
            <img src='../../assets/registerPic.jpg' alt='login hello!' />
          </div>
        </div>
      
    )
  }
}

export default Login