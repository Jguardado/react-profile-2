import * as types from '../constants';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case types.BOOTSTRAP_LANDING:
      return {
        ...state,
        users: action.payload.users.results
      };
    case 'SET_ACTIVE_USERS':
      // let selectedUser = state.users.filter(
      //   user => user.id === action.payload.id
      // );
      // const usersPost = state.posts.filter(
      //   post => post.userId === selectedUser.id
      // );
      // selectedUser = {
      //   ...selectedUser,
      //   posts: usersPost
      // };
      return {
        ...state,
        activeUser: action.payload.id
      };
    default:
      return state;
  }
};

export default usersReducer;
