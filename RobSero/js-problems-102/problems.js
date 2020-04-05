/* eslint-disable no-unused-vars */


// ? write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// ? It should handle complex data types eg: {}, [] etc.
// ? eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  return array.filter(item => {
    return (item || item === 0)
  })
}

// ? write a function to return a random element from an array
// ? eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

// ? write a function that returns the second lowest and second highest number in an array
// ? eg: [1,2,3,4,5,6,7,8] => [2,7]


function secondLowestSecondHighest(array) {
  const newArray = array.sort(function(a,b){
    return a - b 
  })
  console.log(newArray)
  const firstElement = newArray.slice(1,2)
  const lastElement = newArray.slice(array.length - 2, array.length - 1)
  return firstElement.concat(lastElement)
}

// ? write a function that will convert a price into coins needed to make up that price
// ? the coins available are 1, 2, 5, 10, 20, 50, 100
// ? the function should use the smallest number of coins possible
// ? eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]

const test = [1,3,2,5,7,1,4,5,6,7,8]

function coins(price) {
  let coinTotal = price * 100
  const coinsList = []
  
  while (coinTotal >= 100){
    coinTotal -= 100
    coinsList.push(100)
  }

  while (coinTotal >= 50){
    coinTotal -= 50
    coinsList.push(50)
  }

  while (coinTotal >= 20){
    coinTotal -= 20
    coinsList.push(20)
  }

  while (coinTotal >= 10){
    coinTotal -= 10
    coinsList.push(10)
  }
  while (coinTotal >= 5){
    coinTotal -= 5
    coinsList.push(5)
  }
  while (coinTotal >= 2){
    coinTotal -= 2
    coinsList.push(2)
  }
  while (coinTotal >= 1){
    coinTotal -= 1
    coinsList.push(1)
  }
  return coinsList
  
}

// ? write a function to merge two arrays and remove duplicates
// ? eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  const combinedArray = arr1.concat(arr2)
  const uniqueArray = []

  combinedArray.forEach(num => {
    if (!uniqueArray.includes(num)){
      uniqueArray.push(num)
    }
  })
  return uniqueArray
}

// ? write a function that converts an array of strings into an array of objects, with the supplied key
// ? eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {

  const newArrayofObjects = []


  array.forEach(thing => {
    const newThing = {
      [key]: thing
    }
    newArrayofObjects.push(newThing)
  })

  return newArrayofObjects
  

  
}

// ? write a function to convert an object into an array of arrays containing key and value
// ? eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(obj) {

  const emptyArray = []

  const keysArray = Object.keys(obj)
  const valuesArray = Object.values(obj)

  for (let i = 0; i < keysArray.length; i++){
    const newArray = [keysArray[i], valuesArray[i]]
    emptyArray.push(newArray)
  }
  console.log(emptyArray)
  
  return emptyArray

}


// ? write a function to return the number of occurances of each letter of a string in an object case insensitive
// ? eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {
  
  const lowerCase = string.toLowerCase()
  const letterCounterObject = {}
  const splitString = lowerCase.split('')
  
  // console.log(splitString)
  
}
// ---------- I gave up on this haha ------------ //

numOfOccurances('This is great')
// ? write a function to find the first n fibonacci numbers
// ? the fibonacci sequence is a series of numbers, each number is the sum of the last two
// ? 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// ? eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
  const fibArr = [0,1,1]
  for (let i = 0; i < n - 2; i++) {
    const num = fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]
    fibArr.push(num)
  }
  return fibArr.slice(0,n)
}

console.log(fibonacci(5))


module.exports = {
  removeBlank,
  randomElement,
  secondLowestSecondHighest,
  coins,
  mergeUnique,
  arrayToObjects,
  objectToArray,
  numOfOccurances,
  fibonacci
}