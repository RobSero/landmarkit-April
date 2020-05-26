import React from 'react'
import { getOneBuilding, deleteBuilding, createComment, deleteComment, getLocation } from '../../lib/axiosRequests'
import {isUser, isAuthenticated} from '../../lib/authRequests'
import BuildingComment from './BuildingComment'
import CommentsForm from '../common/CommentsForm'
import MapGL, {Marker} from 'react-map-gl'


class BuildingShow extends React.Component {
  state = {
    buildingInfo: null,
    latitude: null,
    longitude: null,
    buildingComment: {
      content: ''
    }
  }

  buildingId = this.props.match.params.id

  async componentDidMount() {
    const building = await getOneBuilding(this.buildingId)
    console.log(building.data)
    const mapsData = await getLocation('big%20ben')
    console.log(mapsData.data);
     
    this.setState({
      buildingInfo: building.data
    })
    console.log(isUser(building.data.user._id));
    // --------------- ADDING MAPS SECTION --------------
    
  }

  handleDelete = async() => {
    try{
      await deleteBuilding(this.buildingId)
      this.props.history.push('/buildings')
    } catch(err) {
      console.log(err)
    }
    
  }

  handleInput = ({target}) => {
    const val = target.value
    console.log(target.name , val);
    this.setState({
      buildingComment: {
        content: val
      }
    })
  }


  handleSubmit = async(e) => {
    e.preventDefault()
    const commentData = this.state.buildingComment
    const res = await createComment(this.buildingId, commentData)
    console.log(res)
    this.setState({
      buildingComment: {
        content: ''
      }
    })
  }

  handleCommentDelete = async(id) => {
    console.log(id)
    try {
      const res = await deleteComment(this.buildingId, id)
      console.log(res)

    }catch(err){
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
                
                <MapGL 
      mapboxApiAccessToken={'pk.eyJ1Ijoicm9ic2VybyIsImEiOiJja2E1NWhibDUxMGk4M2xvZ2Q4Z2dwOXp1In0.SQ2ynnVjGQa9f8gi1fN6LA'}
      height={'400px'} // size
      width={'100%'} // size
      mapStyle={'mapbox://styles/mapbox/outdoors-v11'} //check docs for other styles
      latitude={51.515} //position
      longitude={-0.078} //position
      zoom={11} //higher number, higher the zoom
    ><Marker latitude={51.515}  longitude={-0.078}>
            <div className='marker'></div>
          </Marker>
     </MapGL>
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
              
              {isAuthenticated() && <CommentsForm handleSubmit={this.handleSubmit} handleInput={this.handleInput} value={this.state.buildingComment.content} />}

              { building.comments.length === 0? <h5 className='center'>Could not find anything, try searching again</h5> : building.comments.map(comment => {
                    return <BuildingComment key={comment._id} {...comment} admin={building.user} handleCommentDelete={this.handleCommentDelete} />
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