import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Shop from './containers/Shop/Shop';
import Checkout from './containers/Checkout/Checkout';

function App({ checkUser, currentUser }) {

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/login' render={() =>
          currentUser ?
            (<Redirect to='/' />)
            : (<Login />)
        }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  checkUser: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
