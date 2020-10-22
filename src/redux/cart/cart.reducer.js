import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  cartDropdownHidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.SET_DROPDOWN_VISIBLE:
      return {
        ...state,
        cartDropdownHidden: !state.cartDropdownHidden,
      };

    case CartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
  
    default:
      return state;
  }
};

export default cartReducer;