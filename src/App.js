import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js'

import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Login from './Login.js';
import Search from './Search.js';
import Favorites from './Favorites.js';
import Nav from './Nav.js'

const user = JSON.parse(localStorage.getItem('user'));

export default class App extends Component {
  state = {
    currentUser: user,
    favs: []
  }

  // loadFavs = (favorites) =>  {
  //     this.setState({favs: favorites})
  // }

  render() {
    return (
      <div className="App">
        <Header />
          <Router>
            <Nav />
            <Switch>
              <PrivateRoute exact path='/search' component={Search} user={this.state.currentUser} />

              <PrivateRoute exact path='/favorites' component={Favorites} user={this.state.currentUser} />
                
              <Route exact path='/login' component={Login} />
              <Route exact path='/' component={Home} />
            </Switch>
          </Router>
        
      </div>
    )
  }
}

