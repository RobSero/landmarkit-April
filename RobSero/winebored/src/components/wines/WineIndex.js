import React from 'react'
import WineCard from './WineCard'
import { Link } from 'react-router-dom'
import { getAllWines } from '../../lib/api'

class WineIndex extends React.Component {
  state = {
    wines: null
  }


  async componentDidMount() {
    try {
      const wines = await getAllWines()
      // console.log(wines.data)
      this.setState({ wines: wines.data })
    } catch (err) {
      console.log(err)
    }
    
    
  }

  render(){
    
    if (this.state.wines === null) {
      return <h1>Loading!</h1>
    }
    return (
      <div className='container'>
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="is-active"><Link to="/wines" aria-current="page">Winelist</Link></li>
          </ul>
        </nav>
        <div className='container is-fluid'>
          <div className='columns is-multiline'>
            {this.state.wines.map(wine => {
              return <WineCard key={wine._id} {...wine}/>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default WineIndex