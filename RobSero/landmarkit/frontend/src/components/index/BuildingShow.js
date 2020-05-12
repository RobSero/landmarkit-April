import React from 'react'
import { getOneBuilding, deleteBuilding } from '../../lib/axiosRequests'
import {isUser} from '../../lib/authRequests'
import BuildingComment from './BuildingComment'


class BuildingShow extends React.Component {
  state = {
    buildingInfo: null
  }

  buildingId = this.props.match.params.id

  async componentDidMount() {
    const building = await getOneBuilding(this.buildingId)
    console.log(building.data)
    this.setState({
      buildingInfo: building.data
    })
    console.log(isUser(building.data.user._id));
    
  }

  handleDelete = async() => {
    try{
      await deleteBuilding(this.buildingId)
      this.props.history.push('/buildings')
    } catch(err) {
      console.log(err)
    }
    
  }




  render() {
    const building = this.state.buildingInfo
    if (building === null) {
      return <h1> Oops, we could not find that building!</h1>
    }
    return (
      <>
        <div className='columns'>
          <div className='column is-half'>
            <div className='columns is-multiline'>
              <div className='column is-half is-offset-one-quarter'>
                <img className='show-image' src={building.image} alt={building.name} />
              </div>
              <div className='column is-half is-offset-one-quarter center red'>
                <h3>Section To be implemented: Google Maps Show location</h3>
              </div>
            </div>
          </div>

          <div className='column is-half'>
            <div className='content mr-5'>
              <p className='title mt-3'>{building.name}</p>
              <p className='subtitle is-size-6'>{`${building.city}, ${building.country}`}</p>
              <p className='is-size-5 mb-1'>Landmark Overview:</p>
              <p className='is-size-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              
              <div className='columns'>
                <div className='column is-half'>
                  <p className='is-size-7 mb-2'>Building Age: {building.age} years </p>
                  {isUser(building.user._id) && <button className="noDeco button is-light mr-2">Edit</button>}
                  {isUser(building.user._id) && <button className="noDeco button is-danger mr-2" onClick={this.handleDelete}>Delete</button>}
                </div>
                <div className='column is-half'>
                <p className='is-size-7 mb-2'>Visitors per Year: {building.visitorsPerYear} </p>
                </div>
              </div>
              
              <p className='is-size-5 mt-2'>Comments:</p>
              
              { building.comments.length === 0? <h5 className='center'>Could not find anything, try searching again</h5> : building.comments.map(comment => {
                    return <BuildingComment key={building._id} {...comment} admin={building.user} />
                  })
                }
            </div>
          </div>
        </div>
      </>
    )
  }


}







export default BuildingShow