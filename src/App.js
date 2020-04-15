import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';

import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Shop from './containers/Shop/Shop';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
