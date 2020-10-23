import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartQuantityItems = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulateItems, cartItem) => accumulateItems + cartItem.quantity, 0
    )
);