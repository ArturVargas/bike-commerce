import React from 'react';
import { connect } from 'react-redux';

import { setDropdownVisible } from '../../redux/cart/cart.actions';
import { selectCartQuantityItems } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ setDropdownVisible, itemCount }) => (
  <div className="cart-icon" onClick={setDropdownVisible}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  setDropdownVisible: () => dispatch(setDropdownVisible())
});

const mapStateToProps = (state) => ({
  itemCount: selectCartQuantityItems(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);