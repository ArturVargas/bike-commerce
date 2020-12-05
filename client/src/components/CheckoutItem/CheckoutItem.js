import React from 'react';
import { connect } from 'react-redux';

import { addCartItem, quitCartItem, removeCartItem } from '../../redux/cart/cart.actions';

import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, quitCartItem, addCartItem, removeCartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="imgProduct" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeCartItem(cartItem)}>&#10094;</div>
          <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => quitCartItem(cartItem)}>&#10006;</div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  quitCartItem: item => dispatch(quitCartItem(item)),
  addCartItem: item => dispatch(addCartItem(item)),
  removeCartItem: item => dispatch(removeCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);