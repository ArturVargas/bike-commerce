import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/original.svg';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import './Navbar.scss';

const Navbar = ({ currentUser, cartDropdownHidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
          <div className='option'
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
          :
          <Link className='option' to='/login'>
            SIGN IN
          </Link>
      }
      <CartIcon />
    </div>
    {
      cartDropdownHidden ? null :
        <CartDropdown />
    }
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { cartDropdownHidden } }) => ({
  currentUser,
  cartDropdownHidden
});

export default connect(mapStateToProps)(Navbar);
