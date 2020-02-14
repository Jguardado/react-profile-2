import * as types from '../constants';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case types.BOOTSTRAP_LANDING:
      return {
        ...state,
        users: action.payload.users.results
      };
    default:
      return state;
  }
};

export default usersReducer;
