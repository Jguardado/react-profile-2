import * as types from '../constants';

const albumsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.BOOTSTRAP_LANDING:
      return {
        ...state,
        albums: action.payload.albums
      };
    default:
      return state;
  }
};

export default albumsReducer;
