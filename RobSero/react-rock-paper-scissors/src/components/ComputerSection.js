import React from 'react'
import computerPic from '../assets/computer.png'

function ComputerSection(){

  return (
    <div className='section' id='playerSection'>
      <img src={computerPic} alt='you' height='100'/>
      <p>Computer</p>
    </div>
  )

}

export default ComputerSection