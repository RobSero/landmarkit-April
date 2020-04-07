function init(){

  const playerChoice = document.querySelectorAll('.symbol')
  const playerOneIcon = document.querySelector('#playerOneIcon')
  const playerTwoIcon = document.querySelector('#playerTwoIcon')
  const countdown = document.querySelector('#countdown')
  const winnerText = document.querySelector('#winner')
  const reset = document.querySelector('#resetBut')
  const body = document.body

  let playerOneChoice
  let playerTwoChoice
  let isPlaying = true


  // ------------------------------------ RUNS WHEN PLAYER CLICKS AN ICON --------------------------------- //


  function playerClicked(event) {
    if (isPlaying){
      isPlaying = false
      countdown.style.visibility = 'visible'
      countdown.textContent = 3
      const timer = setInterval(updateCountdown, 1000)
  
      updatePlayerOneSection(event.target.id)
  
      updatePlayerTwoSection()
  
      setTimeout(battle, 3000)
  
      setTimeout(() => {
        clearInterval(timer)
      },4000)
    }
     
  }


  // ------------------------------------ COUNTDOWN CLOCK --------------------------------- //


  function updateCountdown(){
    if (countdown.textContent > 1) {
      countdown.textContent -= 1
    } else {
      countdown.style.visibility = 'hidden'
    }
  }

  // ------------------------------------ RANDOMLY CHANGES PLAYER TWO SECTION --------------------------------- //

 

  function updatePlayerTwoSection() {
    const num = Math.ceil(Math.random() * 3)
    console.log(num)
    
    switch (num){
      case 1:
        playerTwoChoice = 1
        playerTwoIcon.style.backgroundImage = 'url(https://i.ytimg.com/vi/D0STjbmtMjY/maxresdefault.jpg)'
        break
      case 2:
        playerTwoChoice = 2
        playerTwoIcon.style.backgroundImage = 'url(https://ichef.bbci.co.uk/news/660/cpsprodpb/10433/production/_106111666_gettyimages-157681994.jpg)'
        break
      case 3:
        playerTwoChoice = 3
        playerTwoIcon.style.backgroundImage = 'url(https://media.4rgos.it/i/Argos/8491271_R_Z001A?w=750&h=440&qlt=70)'
        break
    }
  }

  // ------------------------------------ CHANGES PLAYER ONES SECTION --------------------------------- //


  function updatePlayerOneSection(choice) {
    switch (choice){
      case 'rock':
        playerOneChoice = 1
        playerOneIcon.style.backgroundImage = 'url(https://i.ytimg.com/vi/D0STjbmtMjY/maxresdefault.jpg)'
        break
      case 'paper':
        playerOneChoice = 2
        playerOneIcon.style.backgroundImage = 'url(https://ichef.bbci.co.uk/news/660/cpsprodpb/10433/production/_106111666_gettyimages-157681994.jpg)'
        break
      case 'scissors':
        playerOneChoice = 3
        playerOneIcon.style.backgroundImage = 'url(https://media.4rgos.it/i/Argos/8491271_R_Z001A?w=750&h=440&qlt=70)'
        break
    }
  }

  // ------------------------------------ DETERMINES WHO WINS --------------------------------- //


  function battle(){
    winnerText.style.visibility = 'visible'
    playerOneIcon.style.visibility = 'visible'
    playerTwoIcon.style.visibility = 'visible'
    if (playerOneChoice === playerTwoChoice){
      winnerText.innerHTML = 'TIE GAME'
      body.style.backgroundColor = 'rgb(223, 216, 124)'
    } else if ((playerOneChoice === 1 && playerTwoChoice === 2) || (playerOneChoice === 2 && playerTwoChoice === 3) || (playerOneChoice === 3 && playerTwoChoice === 2)) {
      winnerText.innerHTML = 'PLAYER TWO WINS'
      body.style.backgroundColor = 'rgb(192, 141, 141)'
    } else {
      winnerText.innerHTML = 'PLAYER ONE WINS'
      body.style.backgroundColor = 'rgb(139, 221, 136)'
    }
    reset.style.visibility = 'visible'
  }



  // ------------------------------------ RESET EVERYTHING --------------------------------- //

  function resetEverything() {
    countdown.style.visibility = 'hidden'
    reset.style.visibility = 'hidden'
    playerOneIcon.style.visibility = 'hidden'
    playerTwoIcon.style.visibility = 'hidden'
    winnerText.style.visibility = 'hidden'
    isPlaying = true
    body.style.backgroundColor = 'beige'
  }

  // ------------------------------------ ASSIGNS EVENTLISTENERS TO ICONS --------------------------------- //


  playerChoice.forEach(button => {
    if (isPlaying){
      button.addEventListener('click', playerClicked)
    } else {
      console.log('already playing')
      
    }
    
  })


  reset.addEventListener('click', resetEverything)




}

// * Remember to run "go live" below to see your changes on save.

// ! Dont forget to wrap your code in a DOM Content Loaded listener function.

window.addEventListener('DOMContentLoaded', init)