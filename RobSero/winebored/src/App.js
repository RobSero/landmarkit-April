import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/global/Navbar'
import Home from './components/Home'
import WineIndex from './components/wines/WineIndex'
import WineNew from './components/wines/WineNew'
import WineShow from './components/wines/WineShow'
import WineEdit from './components/wines/WineEdit'
import Register from './components/Admin/Register'
import Login from './components/Admin/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/wines/:id/edit' component={WineEdit} />
        <Route exact path='/wines/new' component={WineNew} />
        <Route exact path='/wines/:id' component={WineShow} />
        <Route exact path='/wines' component={WineIndex} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
