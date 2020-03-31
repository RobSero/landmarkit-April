// * Answer the questions below and run using "fn" key + "f8"
// * Comment out your answers once they are working 

// ! ⚠️Remember to comment out your practice code before attempting below, "cmd" + "/"

// ? Declare a const and console.log its value

const dogName = 'pooch'
console.log(dogName)

// ? Declare a variable that you can change the value of and console.log its value. Then reassign the variable and console.log the new value

let catName = 'puss'
console.log(catName)

catName = 'cheese'
console.log(catName)

// ? Declare a variable where the value is 'ilovepuppies' and do the following: 

const words = 'ilovepuppies'

// ? Using string methods, console.log the string to include spaces to make the string more readable. Can you make the 'i' a capital too ? eg. I love puppies

const phraseOne = `${words[0].toUpperCase()} ${words.slice(1,5)} ${words.slice(5)}`
console.log(phraseOne)

// ? Declare a new variable with your own string and log this too

const phraseTwo = 'Thai food is amazing!'
console.log(phraseTwo)

// ? Add your new string and the variable containing the 'ilovepuppies' together with a comma. eg. 'I love puppies, they are so fluffy'. Are there multiple ways to do this? Log your solution(s)!

const optionOne = phraseOne + ', ' + phraseTwo
const optionTwo = `${phraseOne}, ${phraseTwo}`

console.log(optionOne)
console.log(optionTwo)

// ? Declare a variable with the number 12455373389

const numOne = 12455373389

// ? Turn this variable into a string rather than a number and log

const stringNum = String(numOne)
console.log(stringNum)

// ? BONUS : console.log a random number from the last variable 

console.log(stringNum[Math.floor((Math.random() * stringNum.length))] )   
  
// ? console.log the remainder of 20 divided by 3 
//! hint: google the modulus operator 

console.log(20 % 3)


// ? Declare a variable with the value 3.333333333

const floaty = 3.333333333

// ? console.log this variable rounded to 2 decimal places
//! hint: google may be needed here too

console.log(floaty.toFixed(2))
