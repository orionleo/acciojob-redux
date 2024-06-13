import * as actionTypes from "../constants/actionsTypes";

export default (state = { users: [], user: {} }, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL:
      return { ...state, users: action?.payload };
    case actionTypes.FETCH_USER:
      return { ...state, user: action?.payload };
    case actionTypes.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action?.payload),
      };
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action?.payload.id ? action?.payload : user
        ),
      };
    case actionTypes.NEW_USER:
      return {
        ...state,
        users: [...state.users, action?.payload],
      };
      default:return state;
  }
};
