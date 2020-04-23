import React from 'react'



function BattleArea(props){


  return (<div className='battleSection'>
    <div className='mainImage' id={props.gameInfo.playerChoice}></div>
    <h3>{props.gameInfo.result}</h3>
    <div className='mainImage' id={props.gameInfo.computerChoice}></div>

  </div>)
}

export default BattleArea