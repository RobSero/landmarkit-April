import React from 'react'
import BuildingForm from './BuildingForm'
import { createBuilding } from '../../lib/axiosRequests'
import {isAuthenticated} from '../../lib/authRequests'

class BuildingNew extends React.Component {
  state = {
    buildingInfo: {
      name: '' ,
      city : '',
      country: '',
      age: '',
      visitorsPerYear: '',
      image: ''
    }
  }

  componentDidMount(){
    if (!isAuthenticated) {
      this.props.history.push('/')
    }
  }

  handleChange = ({target}) => {
    console.log(target.name)
    console.log(target.value)
    this.setState({
      buildingInfo: {
        ...this.state.buildingInfo,
        [target.name]: target.value
      }
    }) 
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submitted')
    try {
      const res = await createBuilding(this.state.buildingInfo)
      console.log(res)
      this.props.history.push('/buildings')
    } 
    catch(err){
      console.log(err);
      
    }
  }
  render() {
    return (
    
        <div className='columns'>
          <div className='column is-half mt-5'>
            <BuildingForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...this.state.buildingInfo} />
          </div>
          <div className='column is-one-half'>
            <img src='../../assets/registerPic.jpg' alt='add a building!'/>
          </div>
        </div>
      
    )
  }
}

export default BuildingNew