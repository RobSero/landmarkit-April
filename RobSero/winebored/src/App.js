import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/global/Navbar'
import Home from './components/Home'
import WineIndex from './components/wines/WineIndex'
import WineShow from './components/wines/WineShow'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/wines/:id' component={WineShow} />
        <Route exact path='/wines' component={WineIndex} />
        
      </Switch>
    </BrowserRouter>
  )
}

export default App
