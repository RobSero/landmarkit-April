import React from 'react'

import { Link } from 'react-router-dom'
import { getOneWine } from '../../lib/api'

class WineShow extends React.Component {
  state = {
    wineInfo: null
  }


  async componentDidMount() {
    try {
      // console.log(this.props.match.params.id)
      const wineId = this.props.match.params.id
      const wineInfo = await getOneWine(wineId)
      // console.log(wineInfo.data)
      this.setState({ wineInfo: wineInfo.data })
    } catch (err) {
      console.log(err)
      
    }
    
    
  }

  render(){
    const { wineInfo } = this.state
    if (wineInfo === null) {
      return <h1>Loading!</h1>
    }

    return (
      <div className='container is-fluid'>
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/wines">Winelist</Link></li>
            <li className="is-active"><Link to="/wines" aria-current="page">{wineInfo.name}</Link></li>
          </ul>
        </nav>
      
      
        <h1 className="title">
          {wineInfo.name}
        </h1>
        <h2 className="subtitle">
        only £{wineInfo.price}
        </h2>
           

        <div className='columns'>
          <div className='column center'>
            <img className='image-wine-show is-centered' width='200' src={wineInfo.image} />
          </div>
        </div>
      
        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Grape</p>
              <p className="title">{wineInfo.grape}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Origin</p>
              <p className="title">{wineInfo.origin}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">abv</p>
              <p className="title">{wineInfo.abv}%</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Stock</p>
              <p className="title has-text-danger">Running Low!</p>
            </div>
          </div>
        </nav>

        <article className="message">
          <div className="message-header">
            <p>Product Overview</p>
          </div>
          <div className="message-body">
            <p>{wineInfo.grape} Grapes are used to give a smooth aftertaste</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </article>
      </div>
    )
  }
}

export default WineShow