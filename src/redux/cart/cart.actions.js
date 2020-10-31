import { CartActionTypes } from './cart.types'

export const setDropdownVisible = () => ({
  type: CartActionTypes.SET_DROPDOWN_VISIBLE
}); 

export const addCartItem = (item) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item
});

export const removeCartItem = (item) => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: item
});

export const quitCartItem = (item) => ({
  type: CartActionTypes.QUIT_CART_ITEM,
  payload: item
})