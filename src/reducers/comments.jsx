import * as types from '../constants';

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.BOOTSTRAP_LANDING:
      return {
        ...state,
        comments: action.payload.comments
      };
    default:
      return state;
  }
};

export default commentsReducer;
