import * as actionTypes from './actionTypes';

export const updateCart = (cart) => {
  return {
    type: actionTypes.UPDATE_CART,
    payload: {
      cart: cart,
    },
  };
};

export const openCart = (isOpen) => {
  return {
    type: actionTypes.UPDATE_CART,
    payload: {
      isOpen: isOpen,
    },
  };
};
