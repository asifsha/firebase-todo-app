import * as types from "../actions/actionTypes";
export default (state = {}, action) => {  
  switch (action.type) {
    case types.FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
