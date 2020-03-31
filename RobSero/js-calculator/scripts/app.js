let userPlaying = true
let BMIorCalc = true
// ----------- CHECK IF USER IS PLAYING ---------------------

while (userPlaying) {

  // ----------- USER TO SELECT REGULAR CALCULATOR OR BMI CALCULATOR ---------------------

  if (window.confirm('Click Ok to continue using the Calculator or Cancel if you wish to try out the BMI Calculator!')) {
    BMIorCalc = true
  } else {
    BMIorCalc = false
  }

  // ----------- NORMAL CALCULATOR SECTION ---------------------

  if (BMIorCalc) {
    
    let result
    let numOne
    let numTwo
    let action

    // ----------- GET THE FIRST NUMBER AND CHECK IT IS A NUMBER ENTERED ---------------------

    numOne = Number(window.prompt('Choose your first number'))
    while (isNaN(numOne)) {
      numOne = Number(window.prompt('Not a number, try again!'))
    }

    // ----------- GET THE ACTION TO BE TAKEN AND VALIDATE IT ---------------------

    action = window.prompt('What would you like to do to the number? add (+), subtract (-), multiply (*), divide (/), power of (^), square root (sqr)?')
    while (action !== '+' && action !== '-' && action !== '/' && action !== '*' && action !== '^' && action !== 'sqr') {
      action = window.prompt('Choose a proper method please: add (+), subtract (-), multiply (*), divide (/), power of (^), square root (sqr)?')
    }

    // ----------- GET THE SECOND NUMBER AND CHECK IT IS A NUMBER ENTERED (if square root is not chosen)---------------------

    if (action !== 'sqr') {
      numTwo = Number(window.prompt('Choose your second number'))
      while (isNaN(numTwo)) {
        numTwo = Number(window.prompt('Not a number, try again!'))
      }
    }

    // ----------- CONFIRM THIS IS THE CLACULATION TO BE DONE, RESET IF IT IS NOT ---------------------

    if (action !== 'sqr') {
      if (!window.confirm(`Just to check, you want to do ${numOne} ${action} ${numTwo}??`)) {
        continue
      }
    } else {
      if (!window.confirm(`Just to check, you want to find the square root of ${numOne}?`)) {
        continue
      }
    }

    // ----------- SWITCH STATEMENT FOR WHICH CALCULATION TO BE MADE ---------------------

    switch (action) {
      case '+':
        result = numOne + numTwo
        alert('Your Result is ' + result)
        break
      case '-':
        result = numOne - numTwo
        alert('Your Result is ' + result)
        break
      case '*':
        result = numOne * numTwo
        alert('Your Result is ' + result)
        break
      case '/':
        result = numOne / numTwo
        alert('Your Result is ' + result)
        break
      case '^':
        result = numOne ** numTwo
        alert('Your Result is ' + result)
        break
      case 'sqr':
        result = Math.sqrt(numOne)
        alert('Your Result is ' + result)
        break
      default:
        console.log('something went wrong!')
    }

    // ----------- PROMPT TO CONFIRM IF THEY WOULD LIKE TO GO AGAIN ---------------------

    let playAgain = window.prompt('Want another go? Type Y or N')
    while (playAgain !== 'Y' && playAgain !== 'N') {
      playAgain = window.prompt(' Only type Y or N please')
    }
    if (playAgain === 'N') {
      userPlaying = false
    }
  }

  // ----------- BMI CALCULATOR SECTION ---------------------

  if (!BMIorCalc) {
    let measurement
    let weight
    let height
    let weightUnit = 'st'
    let heightUnit = 'ft'

    // ----------- CHECK MEASUREMENTS TO USE ---------------------

    measurement = window.prompt('Would you like Metric or Imperial? Type I or M')
    while (measurement !== 'M' && measurement !== 'I') {
      measurement = window.prompt('Choose either I or M')
    }
    if (measurement === 'M') {
      weightUnit = 'kg'
      heightUnit = 'm'
    }

    // ----------- INPUT WEIGHT AND HEIGHT THEN CALCULATE ---------------------

    weight = Number(window.prompt(`Enter your weight in ${weightUnit}`))
    while (isNaN(weight)) {
      weight = Number(window.prompt(`Not a number, Enter your weight in ${weightUnit}`))
    }
    height = window.prompt(`Enter your height in ${heightUnit}`)
    while (isNaN(height)) {
      height = Number(window.prompt(`Not a number, Enter your height in ${heightUnit}`))
    }
    const BMIresult = weight / Math.sqrt(height)
    window.alert(`With a weight of ${weight}${weightUnit} and a height of ${height}${heightUnit}, your BMI is ${BMIresult} I think! :)`)

    // ----------- PROMPT TO CONFIRM IF THEY WOULD LIKE TO GO AGAIN ---------------------

    let playAgain = window.prompt('Want another go? Type Y or N')
    while (playAgain !== 'Y' && playAgain !== 'N') {
      playAgain = window.prompt(' Only type Y or N please')
    }
    if (playAgain === 'N') {
      userPlaying = false
    }
  }

  
}