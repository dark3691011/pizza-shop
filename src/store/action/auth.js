import * as actionTypes from './actionTypes';

export const changeToken = (token) => {
  return {
    type: actionTypes.CHANGE_TOKEN,
    payload: {
      token: token,
    },
  };
};
