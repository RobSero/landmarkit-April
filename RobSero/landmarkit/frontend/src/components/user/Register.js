import React from 'react'
import RegisterForm from './RegisterForm'

class Register extends React.Component {
  state = {

  }


  render() {
    return (
    
        <div className='columns'>
          <div className='column is-half mt-5'>
            <RegisterForm />
          </div>
          <div className='column is-one-half'>
            <img src='../../assets/registerPic.jpg' />
          </div>
        </div>
      
    )
  }
}

export default Register