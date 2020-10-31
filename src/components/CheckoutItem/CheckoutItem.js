import React from 'react';

import './CheckoutItem.scss';

const CheckoutItem = ({ imageUrl, name, price, quantity }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="imgProduct" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10006;</div>
  </div>
);

export default CheckoutItem;