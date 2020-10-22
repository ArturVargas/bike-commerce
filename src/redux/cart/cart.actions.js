import { CartActionTypes } from './cart.types'

export const setDropdownVisible = () => ({
  type: CartActionTypes.SET_DROPDOWN_VISIBLE
}); 

export const addCartItem = (item) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item
});