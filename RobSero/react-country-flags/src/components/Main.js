import React from 'react'
import SearchBar from './SearchBar'

import FlagCard from './FlagCard'


class Main extends React.Component {
  state = {
    flagsList: [],
    filteredFlags: []
  }

  async componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(list => list.json())
      .then(listObject => {
        // console.log(listObject)
        this.setState({
          flagsList: listObject,
          filteredFlags: listObject
        })
      })
  }

  handleChange = (event) => {
    const val = event.target.value
    // console.log(val)
    const newFlagList = this.state.flagsList.filter(country => {
      const regex = new RegExp(val, 'i')
      return country.name.match(regex) || country.region.match(regex)
    })
    this.setState({
      filteredFlags: newFlagList
    })
    
  }

  render() {
    return (
      <div className=' is-fluid'>
        <SearchBar change={this.handleChange} />
        <div className="container columns is-multiline is-fluid">
          {this.state.filteredFlags.map( (country,index) => {
            return <FlagCard key={index} {...country} />
          })}
        </div>
      </div>
    )
  }
}

export default Main
