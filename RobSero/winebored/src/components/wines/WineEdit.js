import React from 'react'
import { getOneWine } from '../../lib/api'
import { editWine } from '../../lib/api'
import WineForm from './WineForm'


class WineEdit extends React.Component {
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

wineId = this.props.match.params.id

async componentDidMount(){
  const res = await getOneWine(this.wineId)
  this.setState({
    wineInfo: res.data
  })
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
    const res = await editWine(this.state.wineInfo, this.wineId)
    console.log(res.data)
    this.props.history.push(`/wines/${this.wineId}`)
  } catch (err){
    console.log(err.data)
  }
}


render(){
  const  { wineInfo } = this.state
  return ( 
    <WineForm wineInfo={wineInfo} handleChange={this.handleChange} handleSubmit={this.handleSubmit} buttonText='Update Wine!'/>
  )
  
}

}

export default WineEdit