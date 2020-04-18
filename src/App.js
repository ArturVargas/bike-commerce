import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';

import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Shop from './containers/Shop/Shop';

import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    }); 
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Navbar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </div>
    );
  }
}

export default App;
