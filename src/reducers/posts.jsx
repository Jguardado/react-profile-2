import * as types from '../constants';

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVED_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case types.BOOTSTRAP_LANDING:
      return {
        ...state,
        posts: action.payload.posts
      };
    default:
      return state;
  }
};

export default postsReducer;
