// ! don't forget to wait for DOM content to be loaded!

function init() {
  const flagSection = document.querySelector('#mainbody')
  const dropDown = document.querySelector('#continent')
  const searchForm = document.getElementById('searchField')



  // ----------------------  GET ALL THE FLAGS ON LOAD ------------------------- //

  async function getAllFlags(){
    try {
      const allFlags = await fetch('https://restcountries.eu/rest/v2/all')
      if (allFlags.status === 404) {
        throw new Error('could not find the continents :(')
      }
      const allFlagsObject = await allFlags.json()
      // console.log(allFlagsObject)
      
      displayFlags(allFlagsObject)
    } catch (err) {
      flagSection.innerHTML = `<br /> <h2>${err} :(</h2> `
      console.log(err)
    }
  } 

  // ----------------------  GET THE CONTINENT FLAGS ONLY ------------------------- //

  async function continentSearch({ target }){
    const continent = target.value
    try {
      const continentFlags = await fetch(`https://restcountries.eu/rest/v2/region/${continent}`)
      if (continentFlags.status === 404) {
        throw new Error('could not find the continents :(')
      }
      const continentFlagsObject = await continentFlags.json()
      // console.log(continentFlags)
      
      displayFlags(continentFlagsObject)
    } catch (err) {
      flagSection.innerHTML = `<br /> <h2>${err} :(  Check your spelling just in case!</h2> `
      console.log(err)
    }
  } 

  // ----------------------  GET THE COUNTRIES FROM A SEARCH BAR ------------------------- //

  async function countrySearch(e){
    e.preventDefault()
    const country = e.target.search.value
    try {
      const countryInfo = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      if (countryInfo.status === 404) {
        throw new Error(`could not find ${country}`)
      }
      const coutryInfoObject = await countryInfo.json()
      // console.log(coutryInfoObject)
      
      displayFlags(coutryInfoObject)
    } catch (err) {
      flagSection.innerHTML = `<br /> <h2>${err} :(</h2> `
      console.log(err)
    }
  } 

  // ----------------------  CLEAR MAIN BODY AND PRESENT NEW FLAG DATA ------------------------- //

  function displayFlags(countries){
    flagSection.innerHTML = ''
    const countriesHTML = countries.map(country => {
      return (
        `<div class="card">
<h3>${country.name}</h3>
<p>${country.nativeName}</p>
<p>${country.region}</p>
<img src="${country.flag}" alt="${country.name} flag">
</div>`
      )
    })
    // console.log(countriesHTML)
    flagSection.innerHTML = countriesHTML.join('')

  }
  getAllFlags()




  dropDown.addEventListener('change', continentSearch)
  searchForm.addEventListener('submit', countrySearch) 

}


window.addEventListener('DOMContentLoaded', init)