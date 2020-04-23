import React from 'react'
import playerPic from '../assets/person.png'

function PlayerSection(props){

  return (
    <div className='section playerSection'>
      <img src={playerPic} alt='you' height='100'/>
      <br />
      <button value='rock' onClick = {props.onClick}>Rock</button>
      <button value='paper' onClick = {props.onClick}>Paper</button>
      <button value='scissors' onClick = {props.onClick}>Scissors</button>
    </div>
  )

}

export default PlayerSection