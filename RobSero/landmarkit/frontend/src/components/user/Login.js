import React from 'react'
import LoginForm from './LoginForm'

class Login extends React.Component {
  state = {

  }


  render() {
    return (
    
        <div className='columns'>
          <div className='column is-half mt-5'>
            <LoginForm />
          </div>
          <div className='column is-one-half'>
            <img src='../../assets/registerPic.jpg' />
          </div>
        </div>
      
    )
  }
}

export default Login