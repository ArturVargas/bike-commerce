import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { setDropdownVisible } from '../../redux/cart/cart.actions';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => (<CartItem key={item.id} item={item} />))
      )
        : (
          <span className="empty-message">Agrega productos al carrito</span>
        )
      }
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(setDropdownVisible());
        }}>
          Checkout
        </CustomButton>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));