import React from 'react'
import { addNewWine } from '../../lib/api'
import WineForm from './WineForm'


class WineNew extends React.Component {
state = {
  wineInfo: {
    'name': '',
    'origin': '',
    'image': '',
    'tastingNotes': '',
    'grape': '',
    'location': {
      'lat': -15,
      'lng': 22
    },
    'abv': NaN,
    'price': NaN
    
  }
}

handleChange = ({ target: { name, value } }) => {
  console.log(name, value)
  if (name === 'abv' || name === 'price'){
    value = parseFloat(value)
  }
  this.setState({ wineInfo: {
    ...this.state.wineInfo,
    [name]: value
  } })
}

handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const res = await addNewWine(this.state.wineInfo)
    console.log(res.data)
    this.props.history.push(`/wines/${res.data._id}`)
  } catch (err){
    console.log(err.data)
  }
}


render(){
  const  { wineInfo } = this.state
  return ( 
    <WineForm wineInfo={wineInfo} handleChange={this.handleChange} handleSubmit={this.handleSubmit} buttonText='Add my Wine!'/>
  )
  
}

}

export default WineNew