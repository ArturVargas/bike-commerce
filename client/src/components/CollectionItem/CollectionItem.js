import React from 'react';
import { connect } from 'react-redux';

import { addCartItem } from '../../redux/cart/cart.actions';

import CustomButton from '../CustomButton/CustomButton';

import './CollectionItem.scss';

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton inverted onClick={() => addCartItem(item)}>
        Add to Cart
      </CustomButton>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);