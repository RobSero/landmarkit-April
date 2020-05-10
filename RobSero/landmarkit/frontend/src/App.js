import React from 'react'
import {BrowserRouter, Switch ,Route} from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Login from './components/user/Login'
import Register from './components/user/Register'
import Home from './components/home/Home'
import BuildingList from './components/index/BuildingList'
import BuildingShow from './components/index/BuildingShow'
import Wishlist from './components/wishlist/Wishlist'

class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/buildings/:id' component={BuildingShow} />
          <Route exact path='/buildings' component={BuildingList} />
          <Route exact path='/wishlist' component={Wishlist} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}
export default App



// setup routes
//Pages: Home,Index,Register,Login,show