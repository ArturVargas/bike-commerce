import React from 'react';
import { connect } from 'react-redux';

import { setDropdownVisible } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ setDropdownVisible }) => (
  <div className="cart-icon" onClick={setDropdownVisible}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  setDropdownVisible: () => dispatch(setDropdownVisible())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);