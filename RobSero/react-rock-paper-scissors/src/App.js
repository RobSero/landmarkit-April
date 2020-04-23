import React from 'react'
import { logState } from './lib/logger'
import PlayerSection from './components/PlayerSection'
import BatteArea from './components/BattleArea'
import ComputerSection from './components/ComputerSection'



class App extends React.Component {
  state = {
    isPlaying: true,
    playerChoice: '',
    computerChoice: '',
    result: 'Pick One!'
  }

playerChoose = (e) => {
  const choice = e.target.value

  if (this.state.isPlaying === true) {
    this.setState({
      playerChoice: choice,
      isPlaying: false
    })
    this.computerChoice()
  }
  
}

computerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3)
  let computerChoice
  // console.log(randomNum)
  switch (randomNum) {
    case 0:
      computerChoice = 'rock'
      break
    case 1:
      computerChoice = 'paper'
      break
    default:
      computerChoice = 'scissors'
      
  }
  this.setState({ computerChoice })
  this.determineWinner(this.state)
}


determineWinner = ({ playerChoice,computerChoice }) => {
  // console.log(`player chose: ${playerChoice} and pc chose: ${computerChoice}`)
  let result = ''
  if (playerChoice === computerChoice) {
    result = 'Draw!'
  } else if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
    result = 'You Lose :('
  } else {
    result = 'you Win :)'
  }
  this.setState({ result })
}

resetGame =() => {
  this.setState({
    isPlaying: true,
    playerChoice: '',
    computerChoice: '',
    result: 'Pick one!'
  })
}


render() {
  console.log(this.state)
  
  logState('App', this.state)
  return (
    <div>
      <h1>Hello World</h1>
      <button className='reset-button' onClick= {this.resetGame}>Reset</button>
      <div className='main'>
        <PlayerSection onClick = {this.playerChoose}/>
        <BatteArea gameInfo = {this.state} />
        <ComputerSection />

      </div>

    </div>
      
  )
}
}

export default App