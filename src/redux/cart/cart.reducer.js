import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemToCart } from './cart.utils';

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

    case CartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.QUIT_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      };
  
    default:
      return state;
  }
};

export default cartReducer;