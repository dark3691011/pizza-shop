import { updateObject } from '../../helper/update-object';
import * as actionTypes from '../action/actionTypes';

const iState = {
  token: '',
};

const changeToken = (state, action) => {
  return updateObject(state, { token: action.payload.token });
};

const reducer = (state = iState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOKEN:
      return changeToken(state, action);
    default:
      return state;
  }
};

export default reducer;
