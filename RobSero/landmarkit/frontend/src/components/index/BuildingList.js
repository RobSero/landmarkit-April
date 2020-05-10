import React from 'react'
import Featured from './Featured'
import BuildingCard from './BuildingCard'
import {getAllBuildings} from '../../lib/axiosRequests'


class BuildingList extends React.Component {
  state = {
    allBuildings: null,
    filteredBuildings: null,
    featuredBuildings: null,
    userInput: ''
  }

  async componentDidMount() {
    const res = await getAllBuildings()
    
    this.setState({
      allBuildings: res.data,
      filteredBuildings: res.data,
      featuredBuildings: res.data.slice(2,5)
    })
  }

  handleInput = ({ target }) => {
    const val = target.value
    const filteredBuildings = this.state.allBuildings.filter(building => {
      const regex = new RegExp(val, 'i')
      return building.name.match(regex) || building.country.match(regex)
    })
    console.log(filteredBuildings)
    this.setState({
      userInput: val,
      filteredBuildings: filteredBuildings
    })
  }

  render() {
    if (this.state.filteredBuildings === null) {
      return <h1>Loading</h1>
    }

    return (
      <>
        <Featured {...this.state.featuredBuildings} />
        <section className='section colorGrey'>
          <div className='columns is-multiline'>
            <div className='column is-one-third is-offset-one-third'>
              <h3 className='center'>Where would you like to go?</h3>
              <input className="input is-dark" type='text' placeholder='Enter a City, Country or Name' onChange={this.handleInput} value={this.state.userInput} />
            </div>

            <div className='column is-three-fifths is-offset-one-fifth'>
              { this.state.filteredBuildings.length === 0? <h5 className='center'>Could not find anything, try searching again</h5> : this.state.filteredBuildings.map(building => {
                    return <BuildingCard key={building._id} {...building} />
                  })
                }
              
            </div>

          </div>

        </section>

      </>
    )
  }
}

export default BuildingList

