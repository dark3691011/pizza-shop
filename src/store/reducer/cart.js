import { updateObject } from '../../helper/update-object';
import * as actionTypes from '../action/actionTypes';

const iState = {
  cart: [
    // {name: "asds", amt: 1}
  ],
  isOpen: false,
};

const updateCart = (state, action) => {
  return updateObject(state, { cart: action.payload.cart });
};

const openCart = (state, action) => {
  return updateObject(state, { isOpen: action.payload.isOpen });
};

const reducer = (state = iState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CART:
      return updateCart(state, action);
    case actionTypes.OPEN_CART_MODAL:
      return openCart(state, action);
    default:
      return state;
  }
};

export default reducer;
